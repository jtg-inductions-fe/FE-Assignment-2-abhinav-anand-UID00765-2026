import { Outlet } from 'react-router-dom';

import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';

export const MainLayout = () => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100dvh',
        }}
    >
        <AppBar
            position="static"
            color="transparent"
            elevation={0}
            sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
        >
            <Toolbar>
                <Typography variant="h6" color="textPrimary" fontWeight="bold">
                    GitHub Explorer
                </Typography>
            </Toolbar>
        </AppBar>

        <Container
            component="main"
            maxWidth="lg"
            sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                py: 4,
            }}
        >
            <Outlet />
        </Container>
    </Box>
);
