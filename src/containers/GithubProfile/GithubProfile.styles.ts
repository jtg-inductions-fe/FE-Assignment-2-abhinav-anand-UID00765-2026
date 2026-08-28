import { Alert, styled } from '@mui/material';

export const StyledErrorAlert = styled(Alert)(({ theme: { spacing } }) => ({
    width: '100%',
    marginTop: spacing(2),
}));
