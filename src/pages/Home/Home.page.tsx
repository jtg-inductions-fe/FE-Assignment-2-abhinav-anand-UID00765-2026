import { Box, Typography } from '@mui/material';

import { homePageStyles } from './Home.styles';

export const HomePage = () => (
    <Box sx={homePageStyles.container}>
        <Typography variant="h4">Home Page</Typography>
    </Box>
);
