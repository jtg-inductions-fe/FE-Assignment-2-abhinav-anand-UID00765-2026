import { Navigate, Outlet } from 'react-router-dom';

import { PATHS } from '@constants';
import { useAuth } from '@hooks';

export const ProtectedRoute = () => {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
        return <Navigate to={PATHS.LOGIN} replace />;
    }

    return <Outlet />;
};
