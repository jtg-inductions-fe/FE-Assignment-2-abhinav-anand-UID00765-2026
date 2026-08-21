import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '@layouts';
import { ErrorPage, HomePage, NotFoundPage } from '@pages';

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
                path: '*',
                element: <NotFoundPage />,
            },
        ],
    },
]);
