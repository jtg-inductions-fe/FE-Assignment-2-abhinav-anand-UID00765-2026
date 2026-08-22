import {
    Email as EmailIcon,
    Link as LinkIcon,
    LocationOn as LocationIcon,
} from '@mui/icons-material';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Link,
    Stack,
    Typography,
} from '@mui/material';

import { profileCardStyles } from './ProfileCard.styles';
import type { ProfileCardProps } from './ProfileCard.types';

export const ProfileCard = ({ user }: ProfileCardProps) => (
    <Card sx={profileCardStyles.card}>
        <CardContent sx={profileCardStyles.cardContent}>
            {/* Header Section: Avatar & Username */}
            <Box sx={profileCardStyles.header}>
                <Avatar
                    src={user.avatar_url}
                    alt={user.login}
                    sx={profileCardStyles.avatar}
                />

                <Box sx={profileCardStyles.userInfo}>
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
                </Box>
            </Box>

            {/* Body Section: Bio, Info, Stats, Button */}
            <Box sx={profileCardStyles.bodyWrapper}>
                <Box sx={profileCardStyles.contentBox}>
                    {user.bio && (
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            sx={profileCardStyles.bio}
                        >
                            {user.bio}
                        </Typography>
                    )}

                    <Box sx={profileCardStyles.infoList}>
                        {user.email && (
                            <Box sx={profileCardStyles.infoItem}>
                                <EmailIcon fontSize="small" color="action" />
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    {user.email}
                                </Typography>
                            </Box>
                        )}
                        {user.location && (
                            <Box sx={profileCardStyles.infoItem}>
                                <LocationIcon fontSize="small" color="action" />
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    {user.location}
                                </Typography>
                            </Box>
                        )}
                        {user.blog && (
                            <Box sx={profileCardStyles.infoItem}>
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
                            </Box>
                        )}
                    </Box>

                    <Stack direction="row" sx={profileCardStyles.statsStack}>
                        <Box sx={profileCardStyles.statBox}>
                            <Typography variant="caption" color="textSecondary">
                                Repos
                            </Typography>
                            <Typography variant="h6" fontWeight="bold">
                                {user.public_repos}
                            </Typography>
                        </Box>
                        <Box sx={profileCardStyles.statBox}>
                            <Typography variant="caption" color="textSecondary">
                                Followers
                            </Typography>
                            <Typography variant="h6" fontWeight="bold">
                                {user.followers}
                            </Typography>
                        </Box>
                        <Box sx={profileCardStyles.statBox}>
                            <Typography variant="caption" color="textSecondary">
                                Following
                            </Typography>
                            <Typography variant="h6" fontWeight="bold">
                                {user.following}
                            </Typography>
                        </Box>
                    </Stack>

                    <Box sx={profileCardStyles.buttonWrapper}>
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
            </Box>
        </CardContent>
    </Card>
);
