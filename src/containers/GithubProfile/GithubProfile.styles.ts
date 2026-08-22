import type { SxProps, Theme } from '@mui/material';

export const githubProfileStyles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    } as SxProps<Theme>,

    loaderWrapper: {
        mt: 4,
    } as SxProps<Theme>,

    errorAlert: {
        width: '100%',
        mt: 2,
    } as SxProps<Theme>,
};
