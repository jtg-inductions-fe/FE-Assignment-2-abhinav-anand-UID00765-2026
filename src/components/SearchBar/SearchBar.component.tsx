import {
    Autocomplete,
    Avatar,
    Box,
    Button,
    TextField,
    Typography,
} from '@mui/material';

import { GitHubUserListItem } from '@services';

import { searchBarStyles } from './SearchBar.styles';
import type { SearchBarProps } from './SearchBar.types';

export const SearchBar = ({
    onSearch,
    isLoading,
    initialValue,
    suggestions,
    isSearching,
    onInputChange,
}: SearchBarProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (initialValue.trim()) {
            onSearch(initialValue.trim());
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={searchBarStyles.formContainer}
        >
            <Autocomplete
                fullWidth
                freeSolo
                options={suggestions}
                loading={isSearching}
                inputValue={initialValue}
                getOptionLabel={(user) =>
                    typeof user == 'string' ? user : user.login
                }
                renderOption={(props, user: GitHubUserListItem) => (
                    <Box component="li" {...props} key={user.login}>
                        <Avatar
                            src={user.avatar_url}
                            alt={user.login}
                            sx={searchBarStyles.optionAvatar}
                        />
                        <Typography variant="body1">{user.login}</Typography>
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
                        placeholder="Enter GitHub username..."
                        disabled={isLoading}
                    />
                )}
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isLoading || !initialValue.trim()}
                sx={searchBarStyles.submitButton}
            >
                {isLoading ? 'Searching...' : 'Search'}
            </Button>
        </Box>
    );
};
