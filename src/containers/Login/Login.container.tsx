import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Alert,
    Box,
    Button,
    Container,
    Paper,
    TextField,
    Typography,
} from '@mui/material';

import { useLoginUserMutation } from '@services';
import { ErrorBoundary } from '@components';

export const LoginContainer = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [validationError, setValidationError] = useState<string | null>(null);

    const [loginUser, { isLoading, error: apiError }] = useLoginUserMutation();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setValidationError(null);

        if (username.trim().length < 3) {
            setValidationError('Username must be at least 3 characters long');
            return;
        }
        if (!password.trim()) {
            setValidationError('Password is required');
            return;
        }

        try {
            const userData = await loginUser(password.trim()).unwrap();
            if (
                userData.login.toLowerCase() !== username.trim().toLowerCase()
            ) {
                setValidationError('Username does not match the token owner');
                return;
            }

            localStorage.setItem('github_user', JSON.stringify(userData));
            localStorage.setItem('github_token', password.trim());

            await navigate('/profile');
        } catch {
            setValidationError('Invalid token');
        }
    };

    const displayError =
        validationError ||
        (apiError as { message?: string })?.message ||
        'Login failed. Please check your credentials.';

    return (
        <Container component="main" maxWidth="xs">
            <ErrorBoundary>
                <Paper elevation={3}>
                    <Box
                        mt={8}
                        p={4}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        bgcolor="background.default"
                    >
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>

                        <Box
                            component="form"
                            onSubmit={(e) => void handleSubmit(e)}
                            mt={1}
                            width="100%"
                        >
                            {(validationError || apiError) && (
                                <Box my={2}>
                                    <Alert severity="error">{displayError}</Alert>
                                </Box>
                            )}

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="GitHub Username"
                                name="username"
                                value={username}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>,
                                ) => setUsername(e.target.value)}
                                error={
                                    !!validationError && username.trim().length < 3
                                }
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Personal Access Token"
                                type="password"
                                id="password"
                                value={password}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>,
                                ) => setPassword(e.target.value)}
                                error={!!validationError && !password.trim()}
                            />

                            <Box mt={3} mb={2}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Authenticating...' : 'Sign In'}
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </ErrorBoundary>
        </Container>
    );
};
