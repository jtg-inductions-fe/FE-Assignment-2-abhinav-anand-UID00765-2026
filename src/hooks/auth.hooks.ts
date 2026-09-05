import { useSelector } from 'react-redux';

import { RootState } from '@store';

export const useAuth = () => {
    const { user, token } = useSelector((state: RootState) => state.auth);
    const isLoggedIn = Boolean(user && token);

    return {
        isLoggedIn,
        user,
        token,
    };
};
