import Cookies from 'js-cookie';

import { COMMON } from '@constants';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GitHubUser } from '@services';
import { getUser } from '@utils';

const { COOKIES } = COMMON;

const initialState = {
    user: getUser() || null,
    token: Cookies.get(COOKIES.TOKEN_KEY) || null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            Cookies.remove(COOKIES.USER_KEY);
            Cookies.remove(COOKIES.TOKEN_KEY);
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
export const authReducer = authSlice.reducer;
