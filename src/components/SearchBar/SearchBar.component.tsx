import { Autocomplete, Box, Button, TextField } from '@mui/material';

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
                onInputChange={(_, newInputValue) => {
                    if (onInputChange) {
                        onInputChange(newInputValue);
                    }
                }}
                onChange={(_, newValue) => {
                    if (newValue) {
                        onSearch(newValue);
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
