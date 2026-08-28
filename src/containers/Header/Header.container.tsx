import { Toolbar, Typography } from '@mui/material';

import { StyledBrandLink, StyledNavbar } from './Header.styles';

export const Header = () => (
    <StyledNavbar position="sticky">
        <Toolbar>
            <Typography variant="h6" component="h1">
                <StyledBrandLink to="/">GitHub Explorer</StyledBrandLink>
            </Typography>
        </Toolbar>
    </StyledNavbar>
);
