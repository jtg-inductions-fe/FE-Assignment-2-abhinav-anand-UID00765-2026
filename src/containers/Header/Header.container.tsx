import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button, IconButton, Menu, Typography } from '@mui/material';

import { Avatar, ErrorBoundary } from '@components';
import { PATHS } from '@constants';
import { logout, RootState } from '@store';

import {
    StyledBrandLink,
    StyledMenuItem,
    StyledNavbar,
    StyledToolbar,
} from './Header.styles';

export const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user } = useSelector((state: RootState) => state.auth);

    // For defining the anchor element of the menu list, when opened
    const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(
        null,
    );

    // If the Menu is currently open
    const open = Boolean(anchorElement);

    // To open the menu list
    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElement(event.currentTarget);
    };

    // To close the menu list
    const handleMenuClose = () => {
        setAnchorElement(null);
    };

    // For logging out from
    const handleLogout = () => {
        handleMenuClose();
        dispatch(logout());
        void navigate(PATHS.LOGIN);
    };

    return (
        <StyledNavbar position="sticky">
            <ErrorBoundary>
                <StyledToolbar>
                    <Typography variant="h6" component="h1">
                        <StyledBrandLink to={PATHS.HOME}>
                            GitHub Explorer
                        </StyledBrandLink>
                    </Typography>

                    {!user ? (
                        <Button
                            variant="contained"
                            onClick={() => void navigate(PATHS.LOGIN)}
                        >
                            Login
                        </Button>
                    ) : (
                        <>
                            <IconButton onClick={handleMenuOpen}>
                                <Avatar
                                    alt={user.login}
                                    src={user.avatar_url}
                                    avatarSize="md"
                                />
                            </IconButton>

                            <Menu
                                anchorEl={anchorElement}
                                open={open}
                                onClose={handleMenuClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                <StyledMenuItem
                                    onClick={() => {
                                        handleMenuClose();
                                        void navigate(PATHS.PROFILE);
                                    }}
                                >
                                    Profile
                                </StyledMenuItem>
                                <StyledMenuItem onClick={handleLogout}>
                                    Logout
                                </StyledMenuItem>
                            </Menu>
                        </>
                    )}
                </StyledToolbar>
            </ErrorBoundary>
        </StyledNavbar>
    );
};
