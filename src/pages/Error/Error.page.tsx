import { useNavigate, useRouteError } from 'react-router-dom';

import { Box } from '@mui/material';

import { Error } from '@components';
import { PATHS } from '@constants';

export const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    let errorMessage = '';

    if (error instanceof Error) {
        errorMessage = (error as Error).message;
    } else if (error && typeof error === 'object') {
        if ('data' in error && error.data && typeof error.data === 'object') {
            const errorData = error.data as { message?: string };
            if (
                typeof errorData.message === 'string' &&
                errorData.message.trim() !== ''
            ) {
                errorMessage = errorData.message;
            }
        } else if (
            'message' in error &&
            typeof (error as { message: unknown }).message === 'string'
        ) {
            errorMessage = (error as { message: string }).message;
        }
    } else {
        errorMessage = 'An unexpected error occurred.';
    }

    return (
        <Box display="flex" minHeight="100dvh">
            <Error
                title="Something went wrong!"
                message={errorMessage}
                titleColor="textSecondary"
                buttonText="Go Back Home"
                onButtonClick={() => void navigate(PATHS.HOME)}
            />
        </Box>
    );
};
