import { Box, Container, styled } from '@mui/material';

export const Root = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100dvh',
});

export const BodyContainer = styled(Container)(({ theme }) => ({
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
}));
