import { Outlet } from 'react-router-dom';

import { Container, Stack } from '@mui/material';

import { Header } from '@containers';

export const MainLayout = () => (
    <Stack minHeight="100dvh">
        <Header />

        <Container component={Stack} flexGrow={1} paddingTop={4}>
            <Outlet />
        </Container>
    </Stack>
);
