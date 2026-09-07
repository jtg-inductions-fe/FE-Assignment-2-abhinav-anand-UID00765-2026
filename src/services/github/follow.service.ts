import { API } from '@constants';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { githubApi } from './index';

const { ENDPOINTS } = API;

const enhancedApi = githubApi.enhanceEndpoints({
    addTagTypes: ['Follow'],
});

const generateFollowPatches = (username: string, isFollowing: boolean) => ({
    userPatch: githubApi.util.updateQueryData(
        'getGithubUser',
        username,
        (draft) => {
            if (draft.followers !== undefined) {
                draft.followers += isFollowing ? 1 : -1;
            }
        },
    ),
    statusPatch: followApi.util.updateQueryData(
        'checkIfFollowing',
        username,
        () => isFollowing,
    ),
});

export const followApi = enhancedApi.injectEndpoints({
    endpoints: (builder) => ({
        checkIfFollowing: builder.query<boolean, string>({
            queryFn: async (
                username,
                _queryApi,
                _extraOptions,
                fetchWithBQ,
            ) => {
                const result = await fetchWithBQ(ENDPOINTS.FOLLOW(username));

                if (result.error && result.error.status === 404)
                    return { data: false };
                if (result.meta?.response?.status === 204)
                    return { data: true };
                return { error: result.error as FetchBaseQueryError };
            },
            providesTags: (_result, _error, username) => [
                { type: 'Follow', id: username },
            ],
        }),

        followUser: builder.mutation<void, string>({
            query: (username) => ({
                url: ENDPOINTS.FOLLOW(username),
                method: 'PUT',
            }),
            async onQueryStarted(username, { dispatch, queryFulfilled }) {
                const patches = generateFollowPatches(username, true);
                const dispatchedUser = dispatch(patches.userPatch);
                const dispatchedStatus = dispatch(patches.statusPatch);

                try {
                    await queryFulfilled;
                } catch {
                    dispatchedUser.undo();
                    dispatchedStatus.undo();
                }
            },
        }),

        unfollowUser: builder.mutation<void, string>({
            query: (username) => ({
                url: ENDPOINTS.FOLLOW(username),
                method: 'DELETE',
            }),
            async onQueryStarted(username, { dispatch, queryFulfilled }) {
                const patches = generateFollowPatches(username, false);
                const dispatchedUser = dispatch(patches.userPatch);
                const dispatchedStatus = dispatch(patches.statusPatch);

                try {
                    await queryFulfilled;
                } catch {
                    dispatchedUser.undo();
                    dispatchedStatus.undo();
                }
            },
        }),
    }),
    overrideExisting: false,
});

export const {
    useCheckIfFollowingQuery,
    useFollowUserMutation,
    useUnfollowUserMutation,
} = followApi;
