export const API = {
    BASE_URL: 'https://api.github.com/',
    ENDPOINTS: {
        GET_USER: (username: string) => `users/${encodeURIComponent(username)}`,
        SEARCH_USER: 'search/users',
    },
};
