import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Typography } from '@mui/material';

import { headerStyles } from './Header.styles';

export const Header = () => (
    <AppBar sx={headerStyles.appBar}>
        <Toolbar>
            <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={headerStyles.title}
            >
                GitHub Explorer
            </Typography>
        </Toolbar>
    </AppBar>
);
