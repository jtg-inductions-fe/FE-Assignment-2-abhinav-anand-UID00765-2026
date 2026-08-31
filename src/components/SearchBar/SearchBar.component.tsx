import React from 'react';

import { Autocomplete, Box, Stack, TextField } from '@mui/material';

import { StyledSubmitButton } from './SearchBar.styles';
import type { SearchBarProps } from './SearchBar.types';

export const SearchBar = <T,>({
    onSearch,
    isLoading,
    initialValue,
    suggestions,
    isSearching,
    isSubmitDisabled,
    onInputChange,
    getOptionLabel,
    renderOptionContent,
    getOptionKey,
    label = 'Search',
    placeholder = 'Type to search...',
}: SearchBarProps<T>) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (initialValue.trim() && !isSubmitDisabled) {
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
                <Autocomplete<T, false, false, true>
                    fullWidth
                    freeSolo
                    options={suggestions}
                    loading={isSearching}
                    inputValue={initialValue}
                    getOptionLabel={getOptionLabel}
                    renderOption={(props, option) => {
                        const key = getOptionKey
                            ? getOptionKey(option)
                            : getOptionLabel(option);

                        return (
                            <Box component="li" {...props} key={key}>
                                {renderOptionContent
                                    ? renderOptionContent(option)
                                    : getOptionLabel(option)}
                            </Box>
                        );
                    }}
                    onInputChange={(_, newInputValue) =>
                        onInputChange(newInputValue)
                    }
                    onChange={(_, newValue) => {
                        if (newValue) {
                            onSearch(
                                typeof newValue === 'string'
                                    ? newValue
                                    : getOptionLabel(newValue),
                            );
                        }
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label={label}
                            placeholder={placeholder}
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
