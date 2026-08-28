import { useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { Box, CircularProgress, Stack } from '@mui/material';

import { ProfileCard, SearchBar } from '@components';
import { useDebounce } from '@hooks';
import { useGetGithubUserQuery, useSearchGithubUsersQuery } from '@services';

import { StyledErrorAlert } from './GithubProfile.styles';

export const GithubProfileContainer = () => {
    // URL routing state
    const [searchParams, setSearchParams] = useSearchParams();
    const SearchQuery = searchParams.get('user') ?? '';
    let errorMessage = 'An unexpected API error occurred.';

    // Actual state
    const [value, setValue] = useState(SearchQuery);

    // Debounced state
    const debouncedValue = useDebounce(value);

    // API Call: Fetch dropdown suggestions
    const { data: searchResults, isFetching: isSearching } =
        useSearchGithubUsersQuery(debouncedValue, {
            skip: debouncedValue.length < 3,
        });

    // API Call: Fetch the full profile
    const {
        data: profileData,
        error,
        isFetching: isProfileLoading,
    } = useGetGithubUserQuery(SearchQuery, { skip: !SearchQuery });

    const handleSearchSubmit = (username: string) => {
        setSearchParams({ user: username });
        setValue(username);
    };

    const isSearchDisabled = isProfileLoading || !value.trim();

    if (error && 'status' in error && error.status === 404) {
        errorMessage = 'User not found';
    } else if (error && 'status' in error && error.status === 403) {
        errorMessage = 'API rate limit exceeded';
    }

    return (
        <Stack alignItems="center" width="100%">
            <SearchBar
                key={SearchQuery}
                onSearch={handleSearchSubmit}
                isLoading={isProfileLoading}
                initialValue={value}
                suggestions={searchResults?.items || []}
                isSearching={isSearching}
                isSubmitDisabled={isSearchDisabled}
                onInputChange={setValue}
            />

            {isProfileLoading && (
                <Box mt={4}>
                    <CircularProgress aria-label="Loading…" />
                </Box>
            )}

            {error && !isProfileLoading && (
                <StyledErrorAlert severity="error">
                    {errorMessage}
                </StyledErrorAlert>
            )}

            {SearchQuery && profileData && !isProfileLoading && !error && (
                <ProfileCard user={profileData} />
            )}
        </Stack>
    );
};
