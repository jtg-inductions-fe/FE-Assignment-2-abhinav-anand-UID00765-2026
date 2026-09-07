export const API = {
    BASE_URL: 'https://api.github.com/',
    ENDPOINTS: {
        GET_USER: (username: string) => `users/${encodeURIComponent(username)}`,
        SEARCH_USER: 'search/users',
        LOGIN: 'user',
        FOLLOW: (username: string) => `user/following/${username}`,
    },
    HEADERS: (token: string) => ({
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
        'X-GitHub-Api-Version': '2026-03-10',
    }),
};
