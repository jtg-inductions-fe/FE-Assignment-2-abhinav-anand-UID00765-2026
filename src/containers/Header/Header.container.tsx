import { Toolbar, Typography } from '@mui/material';

import { ErrorBoundary } from '@components';
import { PATHS } from '@constants';

import { StyledBrandLink, StyledNavbar } from './Header.styles';

export const Header = () => (
    <ErrorBoundary>
        <StyledNavbar position="sticky">
            <Toolbar>
                <Typography variant="h6" component="h1">
                    <StyledBrandLink to={PATHS.HOME}>
                        GitHub Explorer
                    </StyledBrandLink>
                </Typography>
            </Toolbar>
        </StyledNavbar>
    </ErrorBoundary>
);
