import React from 'react';

import { Autocomplete, Box, Stack, TextField, Typography } from '@mui/material';

import type { GitHubUserListItem } from '@services';

import { StyledOptionAvatar, StyledSubmitButton } from './SearchBar.styles';
import type { SearchBarProps } from './SearchBar.types';

export const SearchBar = ({
    onSearch,
    isLoading,
    initialValue,
    suggestions,
    isSearching,
    isSubmitDisabled,
    onInputChange,
}: SearchBarProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (initialValue.trim()) {
            onSearch(initialValue.trim());
        }
    };

    return (
        <Stack
            component="form"
            onSubmit={handleSubmit}
            direction="row"
            spacing={2}
            width="100%"
        >
            <Box flexGrow={1}>
                <Autocomplete
                    fullWidth
                    freeSolo
                    options={suggestions}
                    loading={isSearching}
                    inputValue={initialValue}
                    getOptionLabel={(user) =>
                        typeof user === 'string' ? user : user.login
                    }
                    renderOption={(props, user: GitHubUserListItem) => (
                        <Box component="li" {...props} key={user.login}>
                            <StyledOptionAvatar
                                src={user.avatar_url}
                                alt={user.login}
                            />
                            <Typography variant="body1">
                                {user.login}
                            </Typography>
                        </Box>
                    )}
                    onInputChange={(_, newInputValue) =>
                        onInputChange(newInputValue)
                    }
                    onChange={(_, newValue) => {
                        if (newValue) {
                            onSearch(
                                typeof newValue === 'string'
                                    ? newValue
                                    : newValue.login,
                            );
                        }
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="GitHub username"
                            placeholder="Enter GitHub username..."
                            disabled={isLoading}
                        />
                    )}
                />
            </Box>

            <StyledSubmitButton
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitDisabled}
            >
                {isLoading ? 'Searching...' : 'Search'}
            </StyledSubmitButton>
        </Stack>
    );
};
