import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { RootState } from '@store';

export const AuthRoute = () => {
    const { token } = useSelector((state: RootState) => state.auth);

    if (token) {
        return <Navigate to="/profile" replace />;
    }

    return <Outlet />;
};
