import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { Box, CircularProgress, Stack, Typography } from '@mui/material';

import {
    ActionButtons,
    Avatar,
    DetailItems,
    ErrorBoundary,
    ProfileCard,
    SearchBar,
    Stats,
} from '@components';
import { useDebounce } from '@hooks';
import { useGetGithubUserQuery, useSearchGithubUsersQuery } from '@services';

import { mapGithubProfile } from './GithubProfile.config';
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
    const ProfleCardProps = mapGithubProfile(profileData);

    useEffect(() => {
        setValue(SearchQuery);
    }, [SearchQuery]);

    if (error && 'status' in error && error.status === 404) {
        errorMessage = 'User not found';
    } else if (error && 'status' in error && error.status === 403) {
        errorMessage = 'API rate limit exceeded';
    }

    return (
        <Stack alignItems="center" width="100%">
            <ErrorBoundary>
                <SearchBar
                    key={SearchQuery}
                    onSearch={handleSearchSubmit}
                    isLoading={isProfileLoading}
                    value={value}
                    suggestions={searchResults?.items || []}
                    isSearching={isSearching}
                    isSubmitDisabled={isSearchDisabled}
                    onInputChange={setValue}
                    getOptionLabel={(user) =>
                        typeof user === 'string' ? user : user.login
                    }
                    getOptionKey={(user) => user.login}
                    label="GitHub Username"
                    placeholder="Enter GitHub username..."
                    renderOptionContent={(user) => (
                        <>
                            <Avatar src={user.avatar_url} alt={user.login} />
                            <Typography variant="body1" marginLeft={2}>
                                {user.login}
                            </Typography>
                        </>
                    )}
                />
            </ErrorBoundary>

            <ErrorBoundary>
                {isProfileLoading && (
                    <Box marginTop={4}>
                        <CircularProgress aria-label="Loading…" />
                    </Box>
                )}

                {error && !isProfileLoading && (
                    <StyledErrorAlert severity="error">
                        {errorMessage}
                    </StyledErrorAlert>
                )}

                {SearchQuery &&
                    profileData &&
                    !isProfileLoading &&
                    !error &&
                    ProfleCardProps && (
                        <ProfileCard {...ProfleCardProps.card}>
                            {ProfleCardProps.detailItems && (
                                <DetailItems {...ProfleCardProps.detailItems} />
                            )}
                            {ProfleCardProps.stats && (
                                <Stats {...ProfleCardProps.stats} />
                            )}
                            {ProfleCardProps.action && (
                                <ActionButtons {...ProfleCardProps.action} />
                            )}
                        </ProfileCard>
                    )}
            </ErrorBoundary>
        </Stack>
    );
};
