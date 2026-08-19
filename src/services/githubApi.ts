import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Github API response
export interface GitHubUser {
    login: string;
    id: number;
    avatar_url: string;
    name: string | null;
    company: string | null;
    blog: string;
    location: string | null;
    bio: string | null;
    public_repos: number;
    followers: number;
    following: number;
}

// Defining the RTK Query API Service
export const githubApi = createApi({
    reducerPath: 'githubApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),

    endpoints: (builder) => ({
        getGithubUser: builder.query<GitHubUser, string>({
            query: (username) => `users/${username}`,
        }),
    }),
});

// Export the React hook
export const { useGetGithubUserQuery } = githubApi;
