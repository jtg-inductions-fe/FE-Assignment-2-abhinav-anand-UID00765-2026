import { Stack, Typography } from '@mui/material';

import { ErrorBoundary } from '@components';

export const HomePage = () => (
    <Stack spacing={4} width="100%">
        <ErrorBoundary>
            <Typography variant="h4">Home Page</Typography>
        </ErrorBoundary>
    </Stack>
);
