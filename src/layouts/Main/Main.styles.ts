import { SxProps, Theme } from '@mui/material';

export const mainLayoutStyles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100dvh',
    } as SxProps<Theme>,

    container: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        py: 4,
    } as SxProps<Theme>,
};
