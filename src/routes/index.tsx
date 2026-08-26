import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '@layouts';
import {
    ErrorPage,
    HomePage,
    LoginPage,
    NotFoundPage,
    ProfilePage,
} from '@pages';

import { AuthRoute } from './Auth.route';
import { ProtectedRoute } from './Protected.route';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                element: <AuthRoute />,
                children: [
                    {
                        path: 'login',
                        element: <LoginPage />,
                    },
                ],
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: 'profile',
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
