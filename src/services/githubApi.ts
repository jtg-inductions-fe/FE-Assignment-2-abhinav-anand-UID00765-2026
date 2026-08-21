import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Github API response
export type GitHubUser = {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    email: string | null;
    name: string | null;
    blog: string | null;
    location: string | null;
    bio: string | null;
    public_repos: number;
    followers: number;
    following: number;
};

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
