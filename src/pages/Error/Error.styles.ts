import { SxProps, Theme } from '@mui/material';

export const errorPageStyles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        textAlign: 'center',
        minHeight: '100dvh',
    } as SxProps<Theme>,

    button: {
        mt: 3,
    } as SxProps<Theme>,
};
