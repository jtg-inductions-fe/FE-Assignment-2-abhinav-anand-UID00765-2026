import { API } from '@constants';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { githubApi } from './index';

const { ENDPOINTS } = API;

const enhancedApi = githubApi.enhanceEndpoints({
    addTagTypes: ['Follow'],
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
                const userPatch = dispatch(
                    githubApi.util.updateQueryData(
                        'getGithubUser',
                        username,
                        (draft) => {
                            if (draft.followers !== undefined)
                                draft.followers += 1;
                        },
                    ),
                );

                const statusPatch = dispatch(
                    followApi.util.updateQueryData(
                        'checkIfFollowing',
                        username,
                        () => true,
                    ),
                );

                try {
                    await queryFulfilled;
                } catch {
                    userPatch.undo();
                    statusPatch.undo();
                }
            },
        }),

        unfollowUser: builder.mutation<void, string>({
            query: (username) => ({
                url: ENDPOINTS.FOLLOW(username),
                method: 'DELETE',
            }),
            async onQueryStarted(username, { dispatch, queryFulfilled }) {
                const userPatch = dispatch(
                    githubApi.util.updateQueryData(
                        'getGithubUser',
                        username,
                        (draft) => {
                            if (draft.followers !== undefined)
                                draft.followers -= 1;
                        },
                    ),
                );

                const statusPatch = dispatch(
                    followApi.util.updateQueryData(
                        'checkIfFollowing',
                        username,
                        () => false,
                    ),
                );

                try {
                    await queryFulfilled;
                } catch {
                    userPatch.undo();
                    statusPatch.undo();
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
