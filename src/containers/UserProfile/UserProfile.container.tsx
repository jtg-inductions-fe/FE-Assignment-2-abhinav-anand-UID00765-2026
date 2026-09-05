import { Box, Container } from '@mui/material';

import {
    ActionButtons,
    DetailItems,
    ErrorBoundary,
    ProfileCard,
    Stats,
} from '@components';
import { mapGithubProfile } from '@containers/GithubProfile';
import { useAuth } from '@hooks';

export const UserProfile = () => {
    const { user } = useAuth();
    if (!user) {
        return null;
    }

    const ProfleCardProps = mapGithubProfile(user);

    return (
        <ErrorBoundary>
            <Container maxWidth="md">
                <Box marginY={4} width="100%">
                    {ProfleCardProps && (
                        <ProfileCard {...ProfleCardProps.card}>
                            {ProfleCardProps.detailItems && (
                                <DetailItems {...ProfleCardProps.detailItems} />
                            )}
                            {ProfleCardProps.stats && (
                                <Stats {...ProfleCardProps.stats} />
                            )}
                            {ProfleCardProps.action && (
                                <ActionButtons {...ProfleCardProps.action} />
                            )}
                        </ProfileCard>
                    )}
                </Box>
            </Container>
        </ErrorBoundary>
    );
};
