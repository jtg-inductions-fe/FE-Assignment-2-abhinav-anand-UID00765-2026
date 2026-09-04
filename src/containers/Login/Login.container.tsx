import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Key, Person, Visibility, VisibilityOff } from '@mui/icons-material';
import {
    Alert,
    Box,
    Button,
    Card,
    Container,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
    Typography,
} from '@mui/material';

import { ErrorBoundary } from '@components';
import { useLoginUserMutation } from '@services';
import { setCredentials } from '@store';

export const LoginContainer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [validationError, setValidationError] = useState<string | null>(null);

    const [loginUser, { isLoading, error: apiError }] = useLoginUserMutation();

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        event.preventDefault();
    };

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

            dispatch(
                setCredentials({ user: userData, token: password.trim() }),
            );
            localStorage.setItem('github_user', JSON.stringify(userData));
            localStorage.setItem('github_token', password.trim());

            await navigate('/profile');
        } catch {
            setValidationError('Invalid token');
        }
    };

    const errorMessage =
        validationError ||
        (apiError as { message?: string })?.message ||
        'Login failed. Please check your credentials.';

    return (
        <Container component="main" maxWidth="xs">
            <ErrorBoundary>
                <Card>
                    <Stack padding={4} textAlign="center" gap={1}>
                        <Stack
                            marginBottom={2}
                            direction="row"
                            gap={2}
                            justifyContent="center"
                        >
                            <Box
                                component="img"
                                src="/assets/favicon.svg"
                                alt="GitHub Logo"
                                width="3.2rem"
                                height="3.2rem"
                            />
                            <Typography
                                component="h1"
                                variant="h5"
                                lines={1}
                                alignContent="center"
                            >
                                Login
                            </Typography>
                        </Stack>

                        <Box
                            component="form"
                            onSubmit={(e) => void handleSubmit(e)}
                            marginTop={1}
                            width="100%"
                        >
                            {(validationError || apiError) && (
                                <Box marginY={2}>
                                    <Alert severity="error">
                                        {errorMessage}
                                    </Alert>
                                </Box>
                            )}

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="GitHub Username"
                                placeholder="Enter GitHub Username"
                                name="username"
                                value={username}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>,
                                ) => setUsername(e.target.value)}
                                error={
                                    !!validationError &&
                                    username.trim().length < 3
                                }
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Person />
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Personal Access Token"
                                placeholder="Enter Personal Access Token"
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>,
                                ) => setPassword(e.target.value)}
                                error={!!validationError && !password.trim()}
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Key />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label={
                                                        showPassword
                                                            ? 'hide the password'
                                                            : 'display the password'
                                                    }
                                                    onClick={
                                                        handleClickShowPassword
                                                    }
                                                    onMouseDown={
                                                        handleMouseDownPassword
                                                    }
                                                    onMouseUp={
                                                        handleMouseUpPassword
                                                    }
                                                    edge="end"
                                                >
                                                    {showPassword ? (
                                                        <VisibilityOff />
                                                    ) : (
                                                        <Visibility />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />

                            <Box marginTop={3} marginBottom={2}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    disabled={isLoading}
                                >
                                    {isLoading
                                        ? 'Authenticating...'
                                        : 'Sign In'}
                                </Button>
                            </Box>
                        </Box>
                    </Stack>
                </Card>
            </ErrorBoundary>
        </Container>
    );
};
