import { Alert, Avatar, styled } from '@mui/material';

export const StyledErrorAlert = styled(Alert)(({ theme }) => {
    const { spacing } = theme;

    return {
        width: '100%',
        marginTop: spacing(2),
    };
});

export const StyledOptionAvatar = styled(Avatar)(({ theme }) => {
    const { spacing } = theme;

    return {
        width: 28,
        height: 28,
        marginRight: spacing(2),
    };
});
