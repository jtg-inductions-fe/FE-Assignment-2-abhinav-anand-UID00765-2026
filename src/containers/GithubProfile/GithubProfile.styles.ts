import { Alert, styled } from '@mui/material';

export const StyledErrorAlert = styled(Alert)(({ theme }) => {
    const { spacing } = theme;

    return {
        width: '100%',
        marginTop: spacing(2),
    };
});
