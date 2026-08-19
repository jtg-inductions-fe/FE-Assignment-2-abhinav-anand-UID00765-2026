import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';

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
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            flexGrow={1}
            textAlign="center"
        >
            <Typography variant="h2" color="error" gutterBottom>
                Something went wrong!
            </Typography>
            <Typography variant="body1" color="textSecondary">
                {errorMessage}
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    void navigate('/');
                }}
                sx={{ mt: 3 }}
            >
                Go Back Home
            </Button>
        </Box>
    );
};
