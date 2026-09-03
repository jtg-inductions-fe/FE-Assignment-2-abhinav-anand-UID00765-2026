import { API, COMMON } from '@constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: API.BASE_URL }),
    keepUnusedDataFor: COMMON.GITHUB_CACHE_EXPIRY,
    endpoints: () => ({}),
});
