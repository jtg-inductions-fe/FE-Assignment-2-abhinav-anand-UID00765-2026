import { Box } from '@mui/material';

import { LoginContainer } from '@containers';

import { LoginPageStyles } from './Login.styles';

export const LoginPage = () => (
    <Box sx={LoginPageStyles.container}>
        <LoginContainer />
    </Box>
);
