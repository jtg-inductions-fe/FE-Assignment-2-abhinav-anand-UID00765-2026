import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const githubApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
    keepUnusedDataFor: 3600,
    endpoints: () => ({}),
});
