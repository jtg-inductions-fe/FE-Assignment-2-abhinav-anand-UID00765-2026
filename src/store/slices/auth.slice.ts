import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GitHubUser } from '@services';

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
        setCredentials: (
            state,
            action: PayloadAction<{ user: GitHubUser; token: string }>,
        ) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
    },
});

export const { logout, setCredentials } = authSlice.actions;
export default authSlice.reducer;
