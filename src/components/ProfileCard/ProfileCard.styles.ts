import { Card, styled } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => {
    const { spacing, shadows } = theme;
    const cardShadow = shadows[3];

    return {
        marginTop: spacing(4),
        borderRadius: spacing(2),
        boxShadow: cardShadow,
        width: '100%',
    };
});
