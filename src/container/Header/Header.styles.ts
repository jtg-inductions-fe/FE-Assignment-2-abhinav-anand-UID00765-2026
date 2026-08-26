import { Link } from 'react-router-dom';

import { AppBar, styled } from '@mui/material';

export const NavBar = styled(AppBar)(({ theme }) => ({
    borderBottom: '1px solid',
    borderColor: theme.palette.divider,
    position: 'sticky',
    backgroundImage: 'none',
}));

export const Title = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.text.primary,
    '&:hover': {
        color: theme.palette.primary.main,
    },
}));
