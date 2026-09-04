import { Box, CardContent, Stack, Typography } from '@mui/material';

import { Avatar } from '@components/Avatar';

import { StyledCard } from './ProfileCard.styles';
import type { ProfileCardProps } from './ProfileCard.types';

export const ProfileCard = ({
    image,
    title,
    subtitle,
    description,
    children,
}: ProfileCardProps) => (
    <StyledCard>
        <CardContent>
            <Stack direction="column" spacing={3}>
                {/* Header Section */}
                <Stack direction="row" spacing={3} alignItems="center">
                    {image && (
                        <Avatar
                            src={image.url}
                            alt={image.alt}
                            avatarSize="lg"
                        />
                    )}

                    <Stack
                        direction="column"
                        alignItems="flex-start"
                        textAlign="left"
                    >
                        <Typography variant="h5" fontWeight="bold" lines={1}>
                            {title}
                        </Typography>
                        {subtitle && (
                            <Typography
                                variant="body1"
                                color="primary"
                                lines={1}
                            >
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
                            marginTop={1}
                            lines={3}
                        >
                            {description}
                        </Typography>
                    )}

                    {children}
                </Box>
            </Stack>
        </CardContent>
    </StyledCard>
);
