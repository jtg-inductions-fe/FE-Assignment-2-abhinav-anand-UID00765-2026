import type { SxProps, Theme } from '@mui/material';

export const searchBarStyles = {
    formContainer: {
        display: 'flex',
        gap: 2,
        width: '100%',
    } as SxProps<Theme>,

    submitButton: {
        px: 4,
    } as SxProps<Theme>,

    optionAvatar: {
        width: 28,
        height: 28,
        mr: 2,
    },
};
