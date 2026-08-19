import { useNavigate } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';

export const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
        >
            <Typography variant="h1" color="primary" gutterBottom>
                404
            </Typography>
            <Typography variant="h5" color="textSecondary" gutterBottom>
                Oops! The page you are looking for does not exist.
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
