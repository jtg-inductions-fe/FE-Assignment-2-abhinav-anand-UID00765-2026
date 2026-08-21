import { Outlet } from 'react-router-dom';

import { Box, Container } from '@mui/material';

import { Header } from '@container';

import { mainLayoutStyles } from './Main.styles';

export const MainLayout = () => (
    <Box sx={mainLayoutStyles.root}>
        <Header />

        <Container component="main" sx={mainLayoutStyles.container}>
            <Outlet />
        </Container>
    </Box>
);
