import { API } from '@constants';
import { baseApi } from '@services/base';

import type { GitHubUser, GithubUserList } from './github.types';

const { ENDPOINTS } = API;

export const githubApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getGithubUser: builder.query<GitHubUser, string>({
            query: ENDPOINTS.GET_USER,
        }),
        searchGithubUsers: builder.query<GithubUserList, string>({
            query: (query) => ({
                url: ENDPOINTS.SEARCH_USER,
                params: {
                    q: query,
                },
            }),
        }),
        loginUser: builder.mutation<GitHubUser, string>({
            query: (token) => ({
                url: 'user',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/vnd.github.v3+json',
                    'X-GitHub-Api-Version': '2026-03-10',
                },
            }),
        }),
    }),
    overrideExisting: false,
});

export const {
    useGetGithubUserQuery,
    useSearchGithubUsersQuery,
    useLoginUserMutation,
} = githubApi;
