import { Button, styled } from '@mui/material';

export const StyledSubmitButton = styled(Button)(({ theme }) => {
    const { spacing } = theme;

    return {
        paddingLeft: spacing(4),
        paddingRight: spacing(4),
        maxWidth: '40%',
    };
});
