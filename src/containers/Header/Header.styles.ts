import { Link } from 'react-router-dom';

import { AppBar, MenuItem, styled, Toolbar } from '@mui/material';

export const StyledNavbar = styled(AppBar)(({ theme }) => {
    const {
        palette: { divider },
    } = theme;

    return {
        borderBottom: '1px solid',
        borderColor: divider,
        position: 'sticky',
        backgroundImage: 'none',
    };
});

export const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

export const StyledBrandLink = styled(Link)(({ theme }) => {
    const {
        palette: { text, primary },
    } = theme;

    return {
        textDecoration: 'none',
        color: text.primary,
        '&:hover': {
            color: primary.main,
        },
    };
});

export const StyledMenuItem = styled(MenuItem)(({ theme }) => {
    const {
        palette: { primary, action },
        typography: { pxToRem },
    } = theme;

    return {
        minWidth: pxToRem(160),
        transition: 'all 0.3s',
        '&:hover': {
            color: primary.main,
            backgroundColor: action.hover,
        },
    };
});
