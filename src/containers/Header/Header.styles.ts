import { Link } from 'react-router-dom';

import { AppBar, styled } from '@mui/material';

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
