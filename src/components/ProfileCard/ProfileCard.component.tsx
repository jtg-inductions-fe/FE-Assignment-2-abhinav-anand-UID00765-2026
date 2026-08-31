import {
    Box,
    Button,
    CardContent,
    Link,
    Stack,
    Typography,
} from '@mui/material';

import {
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
                        <Typography variant="h5" fontWeight="bold">
                            {title}
                        </Typography>
                        {subtitle && (
                            <Typography variant="body1" color="primary">
                                {subtitle}
                            </Typography>
                        )}
                    </Stack>
                </Stack>

                {/* Body Section */}
                <Box>
                    {description && (
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            mt={1}
                        >
                            {description}
                        </Typography>
                    )}

                    {infoItems.length > 0 && (
                        <Stack direction="column" spacing={0.5} mt={2}>
                            {infoItems.map((item, index) => (
                                <Stack
                                    key={index}
                                    direction="row"
                                    alignItems="center"
                                    spacing={1}
                                >
                                    {item.icon}
                                    <Typography
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
                                    </Typography>
                                </Stack>
                            ))}
                        </Stack>
                    )}

                    {stats.length > 0 && (
                        <StyledStatsStack
                            direction="row"
                            justifyContent="space-around"
                        >
                            {stats.map((stat, index) => (
                                <Box key={index} textAlign="center">
                                    <Typography
                                        variant="caption"
                                        color="textSecondary"
                                    >
                                        {stat.label}
                                    </Typography>
                                    <Typography variant="h6" fontWeight="bold">
                                        {stat.value}
                                    </Typography>
                                </Box>
                            ))}
                        </StyledStatsStack>
                    )}

                    {actionLabel && actionUrl && (
                        <Box mt={3}>
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
