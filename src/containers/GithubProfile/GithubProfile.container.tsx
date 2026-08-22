import { useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { Alert, Box, CircularProgress } from '@mui/material';

import { ProfileCard, SearchBar } from '@components';
import { useGetGithubUserQuery, useSearchGithubUsersQuery } from '@services';

import { useDebounce } from './GithubProfile.hooks';
import { githubProfileStyles } from './GithubProfile.styles';

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

    if (error && 'status' in error && error.status === 404) {
        errorMessage = 'User not found';
    } else if (error && 'status' in error && error.status === 403) {
        errorMessage = 'API rate limit exceeded';
    }

    return (
        <Box sx={githubProfileStyles.container}>
            <SearchBar
                key={SearchQuery}
                onSearch={handleSearchSubmit}
                isLoading={isProfileLoading}
                initialValue={value}
                suggestions={searchResults?.items || []}
                isSearching={isSearching}
                onInputChange={setValue}
            />

            {isProfileLoading && (
                <Box sx={githubProfileStyles.loaderWrapper}>
                    <CircularProgress aria-label="Loading…" />
                </Box>
            )}

            {error && !isProfileLoading && (
                <Alert severity="error" sx={githubProfileStyles.errorAlert}>
                    {errorMessage}
                </Alert>
            )}

            {SearchQuery && profileData && !isProfileLoading && !error && (
                <ProfileCard user={profileData} />
            )}
        </Box>
    );
};
