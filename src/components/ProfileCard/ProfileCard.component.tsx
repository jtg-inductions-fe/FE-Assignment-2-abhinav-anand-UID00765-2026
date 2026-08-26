import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
import LocationIcon from '@mui/icons-material/LocationOn';
import { Button, Link, Typography } from '@mui/material';

import {
    StyledAvatar,
    StyledBio,
    StyledBodyWrapper,
    StyledButtonWrapper,
    StyledCard,
    StyledCardContent,
    StyledContentBox,
    StyledHeader,
    StyledInfoItem,
    StyledInfoList,
    StyledStatBox,
    StyledStatsStack,
    StyledUserInfo,
} from './ProfileCard.styles';
import type { ProfileCardProps } from './ProfileCard.types';

export const ProfileCard = ({ user }: ProfileCardProps) => (
    <StyledCard>
        <StyledCardContent>
            {/* Header Section: Avatar & Username */}
            <StyledHeader>
                <StyledAvatar src={user.avatar_url} alt={user.login} />

                <StyledUserInfo>
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
                </StyledUserInfo>
            </StyledHeader>

            {/* Body Section: Bio, Info, Stats, Button */}
            <StyledBodyWrapper>
                <StyledContentBox>
                    {user.bio && (
                        <StyledBio variant="body1" color="textSecondary">
                            {user.bio}
                        </StyledBio>
                    )}

                    <StyledInfoList>
                        {user.email && (
                            <StyledInfoItem>
                                <EmailIcon fontSize="small" color="action" />
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    {user.email}
                                </Typography>
                            </StyledInfoItem>
                        )}
                        {user.location && (
                            <StyledInfoItem>
                                <LocationIcon fontSize="small" color="action" />
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    {user.location}
                                </Typography>
                            </StyledInfoItem>
                        )}
                        {user.blog && (
                            <StyledInfoItem>
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
                            </StyledInfoItem>
                        )}
                    </StyledInfoList>

                    <StyledStatsStack direction="row">
                        <StyledStatBox>
                            <Typography variant="caption" color="textSecondary">
                                Repos
                            </Typography>
                            <Typography variant="h6" fontWeight="bold">
                                {user.public_repos}
                            </Typography>
                        </StyledStatBox>
                        <StyledStatBox>
                            <Typography variant="caption" color="textSecondary">
                                Followers
                            </Typography>
                            <Typography variant="h6" fontWeight="bold">
                                {user.followers}
                            </Typography>
                        </StyledStatBox>
                        <StyledStatBox>
                            <Typography variant="caption" color="textSecondary">
                                Following
                            </Typography>
                            <Typography variant="h6" fontWeight="bold">
                                {user.following}
                            </Typography>
                        </StyledStatBox>
                    </StyledStatsStack>

                    <StyledButtonWrapper>
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
                    </StyledButtonWrapper>
                </StyledContentBox>
            </StyledBodyWrapper>
        </StyledCardContent>
    </StyledCard>
);
