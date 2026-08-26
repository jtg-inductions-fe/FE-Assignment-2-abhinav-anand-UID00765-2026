import { Box } from '@mui/material';

import { UserProfile } from '@containers';

import { ProfilePageStyles } from './Profile.styles';

export const ProfilePage = () => (
    <Box sx={ProfilePageStyles.container}>
        <UserProfile />
    </Box>
);
