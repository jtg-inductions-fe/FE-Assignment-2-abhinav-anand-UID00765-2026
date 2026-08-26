import { createSlice } from '@reduxjs/toolkit';
import { githubApi, GitHubUser } from '@services';

const storedUser = localStorage.getItem('github_user');
const storedToken = localStorage.getItem('github_token');

const initialState = {
    user: storedUser ? (JSON.parse(storedUser) as GitHubUser) : null,
    token: storedToken || null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('github_user');
            localStorage.removeItem('github_token');
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            githubApi.endpoints.loginUser.matchFulfilled,
            (state, action) => {
                state.user = action.payload;
                state.token = action.meta.arg.originalArgs;
            },
        );
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
