import { Stack, Typography } from '@mui/material';

import { GithubProfileContainer } from '@containers';

import { ErrorBoundary } from '@components';

export const HomePage = () => (
    <Stack spacing={4} width="100%">
        <ErrorBoundary>
            <Typography variant="h4" component="h1" textAlign="center">
                Find GitHub User
            </Typography>
        </ErrorBoundary>
        <GithubProfileContainer />
    </Stack>
);
