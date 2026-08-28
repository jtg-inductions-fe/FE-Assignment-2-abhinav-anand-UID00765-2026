import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
import LocationIcon from '@mui/icons-material/LocationOn';
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

export const ProfileCard = ({ user }: ProfileCardProps) => (
    <StyledCard>
        <CardContent>
            <Stack direction="column" spacing={3}>
                {/* Header Section: Avatar & Username */}
                <Stack direction="row" spacing={3} alignItems="center">
                    <StyledAvatar src={user.avatar_url} alt={user.login} />

                    <Stack
                        direction="column"
                        alignItems="flex-start"
                        textAlign="left"
                    >
                        <Typography variant="h5" fontWeight="bold">
                            {user.name ?? user.login}
                        </Typography>
                        <Link
                            href={user.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            color="primary"
                            underline="hover"
                        >
                            @{user.login}
                        </Link>
                    </Stack>
                </Stack>

                {/* Body Section: Bio, Info, Stats, Button */}
                <Box>
                    {user.bio && (
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            mt={1}
                        >
                            {user.bio}
                        </Typography>
                    )}

                    <Stack direction="column" spacing={0.5} mt={2}>
                        {user.email && (
                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={1}
                            >
                                <EmailIcon fontSize="small" color="action" />
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    {user.email}
                                </Typography>
                            </Stack>
                        )}
                        {user.location && (
                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={1}
                            >
                                <LocationIcon fontSize="small" color="action" />
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    {user.location}
                                </Typography>
                            </Stack>
                        )}
                        {user.blog && (
                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={1}
                            >
                                <LinkIcon fontSize="small" color="action" />
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    <Link
                                        href={
                                            user.blog.startsWith('http')
                                                ? user.blog
                                                : `https://${user.blog}`
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        color="inherit"
                                    >
                                        {user.blog}
                                    </Link>
                                </Typography>
                            </Stack>
                        )}
                    </Stack>

                    <StyledStatsStack
                        direction="row"
                        justifyContent="space-around"
                    >
                        <Box textAlign="center">
                            <Typography variant="caption" color="textSecondary">
                                Repos
                            </Typography>
                            <Typography variant="h6" fontWeight="bold">
                                {user.public_repos}
                            </Typography>
                        </Box>
                        <Box textAlign="center">
                            <Typography variant="caption" color="textSecondary">
                                Followers
                            </Typography>
                            <Typography variant="h6" fontWeight="bold">
                                {user.followers}
                            </Typography>
                        </Box>
                        <Box textAlign="center">
                            <Typography variant="caption" color="textSecondary">
                                Following
                            </Typography>
                            <Typography variant="h6" fontWeight="bold">
                                {user.following}
                            </Typography>
                        </Box>
                    </StyledStatsStack>

                    <Box mt={3}>
                        <Button
                            variant="contained"
                            color="primary"
                            href={user.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            fullWidth
                        >
                            Visit profile on GitHub
                        </Button>
                    </Box>
                </Box>
            </Stack>
        </CardContent>
    </StyledCard>
);
