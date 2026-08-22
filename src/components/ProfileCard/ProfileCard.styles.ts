import type { SxProps, Theme } from '@mui/material';

export const profileCardStyles = {
    card: {
        width: '100%',
        mt: 4,
        borderRadius: 2,
        boxShadow: 3,
    } as SxProps<Theme>,

    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
    } as SxProps<Theme>,

    header: {
        display: 'flex',
        gap: 3,
        alignItems: 'center',
        justifyContent: 'flex-start',
    } as SxProps<Theme>,

    avatar: {
        width: 120,
        height: 120,
        border: '4px solid',
        borderColor: 'divider',
    } as SxProps<Theme>,

    userInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', sm: 'flex-start' },
        textAlign: { xs: 'center', sm: 'left' },
    } as SxProps<Theme>,

    bodyWrapper: {
        display: 'flex',
        gap: 3,
        flexDirection: 'column',
        width: '100%',
    } as SxProps<Theme>,

    contentBox: {
        width: '100%',
    } as SxProps<Theme>,

    bio: {
        mt: 1,
    } as SxProps<Theme>,

    infoList: {
        mt: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 0.5,
    } as SxProps<Theme>,

    infoItem: {
        display: 'flex',
        alignItems: 'center',
        gap: 1,
    } as SxProps<Theme>,

    statsStack: {
        mt: 2,
        p: 2,
        bgcolor: 'background.default',
        borderRadius: 2,
        width: '100%',
        justifyContent: 'space-around',
    } as SxProps<Theme>,

    statBox: {
        textAlign: 'center',
    } as SxProps<Theme>,

    buttonWrapper: {
        mt: 3,
        width: '100%',
    } as SxProps<Theme>,
};
