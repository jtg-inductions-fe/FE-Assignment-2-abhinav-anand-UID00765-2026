import { Toolbar, Typography } from '@mui/material';

import { ErrorBoundary } from '@components';

import { StyledBrandLink, StyledNavbar } from './Header.styles';

export const Header = () => (
    <StyledNavbar position="sticky">
        <ErrorBoundary>
            <Toolbar>
                <Typography variant="h6" component="h1">
                    <StyledBrandLink to="/">GitHub Explorer</StyledBrandLink>
                </Typography>
            </Toolbar>
        </ErrorBoundary>
    </StyledNavbar>
);
