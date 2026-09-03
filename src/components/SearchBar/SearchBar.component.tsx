import React from 'react';

import { Autocomplete, Box, Stack, TextField, Typography } from '@mui/material';

import { StyledSubmitButton } from './SearchBar.styles';
import type { SearchBarProps } from './SearchBar.types';

export const SearchBar = <T,>({
    onSearch,
    isLoading,
    value,
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
        if (value.trim() && !isSubmitDisabled) {
            onSearch(value.trim());
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
                    inputValue={value}
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
                <Typography variant="button" lines={1}>
                    {isLoading ? 'Searching...' : 'Search'}
                </Typography>
            </StyledSubmitButton>
        </Stack>
    );
};
