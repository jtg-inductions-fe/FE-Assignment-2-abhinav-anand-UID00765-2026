import { createBrowserRouter } from 'react-router-dom';

import { PATHS } from '@constants';
import { MainLayout } from '@layouts';
import {
    ErrorPage,
    HomePage,
    LoginPage,
    NotFoundPage,
    ProfilePage,
} from '@pages';

import { ProtectedRoute } from './Protected.route';

export const router = createBrowserRouter([
    {
        path: PATHS.HOME,
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: PATHS.LOGIN,
                element: <LoginPage />,
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: PATHS.PROFILE,
                        element: <ProfilePage />,
                    },
                ],
            },
            {
                path: '*',
                element: <NotFoundPage />,
            },
        ],
    },
]);
