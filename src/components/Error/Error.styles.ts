import { Box, Button, styled } from '@mui/material';

export const ErrorContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    textAlign: 'center',
    flex: '1',
    padding: '2rem',
});

export const ErrorButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(3),
}));
