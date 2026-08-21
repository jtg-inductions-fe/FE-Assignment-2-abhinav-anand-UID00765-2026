import {
    isRouteErrorResponse,
    useNavigate,
    useRouteError,
} from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';

import { errorPageStyles } from './Error.styles';

export const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    let errorMessage = 'An unexpected error occurred.';

    if (isRouteErrorResponse(error)) {
        const errorData = error.data as { message?: string } | undefined;
        errorMessage = errorData?.message || error.statusText || errorMessage;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    }

    return (
        <Box sx={errorPageStyles.container}>
            <Typography variant="h2" color="error" gutterBottom>
                Something went wrong!
            </Typography>

            <Typography variant="body1" color="textSecondary">
                {errorMessage}
            </Typography>

            <Button
                variant="contained"
                onClick={() => {
                    void navigate('/');
                }}
                sx={errorPageStyles.button}
            >
                Go Back Home
            </Button>
        </Box>
    );
};
