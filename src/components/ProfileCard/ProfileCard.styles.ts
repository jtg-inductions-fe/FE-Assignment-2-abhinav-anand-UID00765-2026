import { Avatar, Card, Stack, styled, Typography } from '@mui/material';

import { truncateLines } from '@utils';

import { ClampedTypographyProps } from './ProfileCard.types';

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

export const StyledAvatar = styled(Avatar)(({ theme }) => {
    const {
        palette: { divider },
    } = theme;

    return {
        width: 120,
        height: 120,
        border: '4px solid',
        borderColor: divider,
    };
});

export const StyledStatsStack = styled(Stack)(({ theme }) => {
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

export const ClampedTypography = styled(Typography)<ClampedTypographyProps>(
    ({ lines = 1 }) => ({
        ...truncateLines(lines),
    }),
);
