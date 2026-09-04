import { useSelector } from 'react-redux';

import { Box, Container } from '@mui/material';

import {
    ActionButtons,
    DetailItems,
    ErrorBoundary,
    ProfileCard,
    Stats,
} from '@components';
import { mapGithubProfile } from '@containers/GithubProfile';
import { RootState } from '@store';

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
            </ErrorBoundary>
        </Container>
    );
};
