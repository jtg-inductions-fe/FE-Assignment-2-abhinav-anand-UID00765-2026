import { Box, Button, CardContent, Link, Stack } from '@mui/material';

import {
    ClampedTypography,
    StyledAvatar,
    StyledCard,
    StyledStatsStack,
} from './ProfileCard.styles';
import type { ProfileCardProps } from './ProfileCard.types';

export const ProfileCard = ({
    imageUrl,
    imageAlt = 'Profile',
    title,
    subtitle,
    description,
    infoItems = [],
    stats = [],
    actionLabel,
    actionUrl,
}: ProfileCardProps) => (
    <StyledCard>
        <CardContent>
            <Stack direction="column" spacing={3}>
                {/* Header Section */}
                <Stack direction="row" spacing={3} alignItems="center">
                    <StyledAvatar src={imageUrl} alt={imageAlt} />

                    <Stack
                        direction="column"
                        alignItems="flex-start"
                        textAlign="left"
                    >
                        <ClampedTypography variant="h5" fontWeight="bold">
                            {title}
                        </ClampedTypography>
                        {subtitle && (
                            <ClampedTypography variant="body1" color="primary">
                                {subtitle}
                            </ClampedTypography>
                        )}
                    </Stack>
                </Stack>

                {/* Body Section */}
                <Box>
                    {description && (
                        <ClampedTypography
                            variant="body1"
                            color="textSecondary"
                            marginTop={1}
                            lines={3}
                        >
                            {description}
                        </ClampedTypography>
                    )}

                    {infoItems.length > 0 && (
                        <Stack direction="column" spacing={0.5} marginTop={2}>
                            {infoItems.map((item, index) => (
                                <Stack
                                    key={index}
                                    direction="row"
                                    alignItems="center"
                                    spacing={1}
                                >
                                    {item.icon}
                                    <ClampedTypography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        {item.url ? (
                                            <Link
                                                href={item.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                color="inherit"
                                            >
                                                {item.text}
                                            </Link>
                                        ) : (
                                            item.text
                                        )}
                                    </ClampedTypography>
                                </Stack>
                            ))}
                        </Stack>
                    )}

                    {stats.length > 0 && (
                        <StyledStatsStack direction="row" gap={2}>
                            {stats.map((stat, index) => (
                                <Box key={index} textAlign="center" flex={1}>
                                    <ClampedTypography
                                        variant="caption"
                                        color="textSecondary"
                                    >
                                        {stat.label}
                                    </ClampedTypography>
                                    <ClampedTypography
                                        variant="h6"
                                        fontWeight="bold"
                                    >
                                        {stat.value}
                                    </ClampedTypography>
                                </Box>
                            ))}
                        </StyledStatsStack>
                    )}

                    {actionLabel && actionUrl && (
                        <Box marginTop={3}>
                            <Button
                                variant="contained"
                                color="primary"
                                href={actionUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                fullWidth
                            >
                                {actionLabel}
                            </Button>
                        </Box>
                    )}
                </Box>
            </Stack>
        </CardContent>
    </StyledCard>
);
