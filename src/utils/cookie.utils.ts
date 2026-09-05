import Cookies from 'js-cookie';

import { COMMON } from '@constants';
import { GitHubUser } from '@services';

const { COOKIES } = COMMON;

export const getUser = () => {
    const userCookie = Cookies.get(COOKIES.USER_KEY);
    if (!userCookie) return null;
    return JSON.parse(userCookie) as GitHubUser;
};
