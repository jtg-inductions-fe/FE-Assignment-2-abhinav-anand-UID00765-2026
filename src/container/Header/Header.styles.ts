import { SxProps, Theme } from '@mui/material';

export const headerStyles = {
    appBar: {
        borderBottom: '1px solid',
        borderColor: 'divider',
        position: 'sticky',
        backgroundImage: 'none',
    } as SxProps<Theme>,

    title: {
        textDecoration: 'none',
        color: 'text.primary',
        fontWeight: 'bold',
        '&:hover': {
            color: 'primary.main',
        },
    } as SxProps<Theme>,
};
