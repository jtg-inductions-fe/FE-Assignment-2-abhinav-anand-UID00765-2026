import { SxProps, Theme } from '@mui/material';

export const notFoundPageStyles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        textAlign: 'center',
        flex: '1',
    } as SxProps<Theme>,

    button: {
        mt: 3,
    } as SxProps<Theme>,
};
