import { Stack, styled } from '@mui/material';

export const StyledStack = styled(Stack)(({ theme }) => {
    const {
        spacing,
        palette: { background },
    } = theme;

    return {
        marginTop: spacing(2),
        padding: spacing(2),
        backgroundColor: background.default,
        borderRadius: spacing(2),
    };
});
