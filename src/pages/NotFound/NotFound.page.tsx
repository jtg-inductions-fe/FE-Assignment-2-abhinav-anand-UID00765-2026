import { useNavigate } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';

import { notFoundPageStyles } from './NotFound.styles';

export const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <Box sx={notFoundPageStyles.container}>
            <Typography variant="h1" color="primary">
                404
            </Typography>
            <Typography variant="h5" color="textSecondary">
                Oops! The page you are looking for does not exist.
            </Typography>
            <Button
                variant="contained"
                onClick={() => {
                    void navigate('/');
                }}
                sx={notFoundPageStyles.button}
            >
                Go Back Home
            </Button>
        </Box>
    );
};
