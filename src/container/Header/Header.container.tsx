import { Toolbar, Typography } from '@mui/material';

import { NavBar, Title } from './Header.styles';

export const Header = () => (
    <NavBar>
        <Toolbar>
            <Typography variant="h6" component={Title} to="/">
                GitHub Explorer
            </Typography>
        </Toolbar>
    </NavBar>
);
