import { useSelector } from 'react-redux';

import { Box, Container } from '@mui/material';

import { MetricsPanel, ProfileCard, ErrorBoundary, Info, Stats, ActionButtons } from '@components';
import { RootState } from '@store';
import { mapGithubProfile } from '@utils';

export const UserProfile = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    if (!user) {
        return null;
    }

    const ProfleCardProps = mapGithubProfile(user);

    return (
        <Container maxWidth="md">
            <ErrorBoundary>
                <Box mt={4} mb={4} width="100%">
                    {   
                        ProfleCardProps &&
                        <ProfileCard {...ProfleCardProps.card}>
                            {ProfleCardProps.info && (
                                <Info {...ProfleCardProps.info} />
                            )}
                            {ProfleCardProps.stats && (
                                <Stats {...ProfleCardProps.stats} />
                            )}
                            {ProfleCardProps.action && (
                                <ActionButtons {...ProfleCardProps.action} />
                            )}
                            {ProfleCardProps.metrics && (
                                <MetricsPanel {...ProfleCardProps.metrics} />
                            )}
                        </ProfileCard>
                    }
                </Box>
            </ErrorBoundary>
        </Container>
    );
};
