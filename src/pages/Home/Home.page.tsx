import { Stack, Typography } from '@mui/material';

import { ErrorBoundary } from '@components';
import { GithubProfileContainer } from '@containers';

export const HomePage = () => (
    <Stack spacing={4} width="100%">
        <ErrorBoundary>
            <Typography
                variant="h4"
                component="h1"
                textAlign="center"
                lines={1}
            >
                Find GitHub User
            </Typography>
        </ErrorBoundary>
        <GithubProfileContainer />
    </Stack>
);
