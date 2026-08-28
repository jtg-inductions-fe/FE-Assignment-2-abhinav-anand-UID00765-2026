import { Avatar, Card, Stack, styled } from '@mui/material';

export const StyledCard = styled(Card)(({ theme: { spacing, shadows } }) => ({
    marginTop: spacing(4),
    borderRadius: spacing(2),
    boxShadow: shadows[3],
    width: '100%',
}));

export const StyledAvatar = styled(Avatar)(({ theme: { palette } }) => ({
    width: 120,
    height: 120,
    border: '4px solid',
    borderColor: palette.divider,
}));

export const StyledStatsStack = styled(Stack)(
    ({ theme: { spacing, palette } }) => ({
        marginTop: spacing(2),
        padding: spacing(2),
        backgroundColor: palette.background.default,
        borderRadius: spacing(2),
    }),
);
