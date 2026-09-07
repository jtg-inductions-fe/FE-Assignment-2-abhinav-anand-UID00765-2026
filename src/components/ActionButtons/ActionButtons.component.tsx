import { Box, Button, Typography } from '@mui/material';

import { ActionButtonsProps } from './ActionButtons.types';

export const ActionButtons = ({ url, label }: ActionButtonsProps) => (
    <Box marginTop={3}>
        <Button
            variant="contained"
            color="primary"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
        >
            <Typography variant="button" lines={1}>
                {label}
            </Typography>
        </Button>
    </Box>
);
