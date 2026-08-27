import {
    Box,
    Button,
    CircularProgress,
    Stack,
    Typography,
} from '@mui/material';

import type { ActionButtonsProps } from './ActionButtons.types';

export const ActionButtons = ({ actions }: ActionButtonsProps) => {
    if (!actions?.length) return null;

    return (
        <Box marginTop={3}>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                width="100%"
            >
                {actions.map((action, index) => (
                    <Button
                        key={index}
                        variant={action.variant ?? 'contained'}
                        color={action.color ?? 'primary'}
                        onClick={action.onClick}
                        disabled={action.disabled || action.loading}
                        fullWidth
                        startIcon={
                            action.loading ? (
                                <CircularProgress size={16} color="inherit" />
                            ) : undefined
                        }
                        {...(action.href && {
                            href: action.href,
                            target: '_blank',
                            rel: 'noopener noreferrer',
                        })}
                    >
                        <Typography variant="button" lines={1}>
                            {action.loading ? 'Processing...' : action.label}
                        </Typography>
                    </Button>
                ))}
            </Stack>
        </Box>
    );
};
