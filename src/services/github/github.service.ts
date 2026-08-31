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
    }),
    overrideExisting: false,
});

export const { useGetGithubUserQuery, useSearchGithubUsersQuery } = githubApi;
