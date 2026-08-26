import { GitHubUser } from './githubApi.types';
import { githubApi } from './index';

export const searchApi = githubApi.injectEndpoints({
    endpoints: (builder) => ({
        getGithubUser: builder.query<GitHubUser, string>({
            query: (username) => `users/${username}`,
        }),

        searchGithubUsers: builder.query<{ items: GitHubUser[] }, string>({
            query: (query) => `search/users?q=${query}`,
        }),
    }),
    overrideExisting: false,
});

export const { useGetGithubUserQuery, useSearchGithubUsersQuery } = searchApi;
