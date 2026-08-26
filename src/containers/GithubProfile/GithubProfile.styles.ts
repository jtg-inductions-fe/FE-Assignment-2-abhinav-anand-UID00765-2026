import { Alert, Box, styled } from '@mui/material';

export const StyledContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
});

export const StyledLoaderWrapper = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(4),
}));

export const StyledErrorAlert = styled(Alert)(({ theme }) => ({
    width: '100%',
    marginTop: theme.spacing(2),
}));
