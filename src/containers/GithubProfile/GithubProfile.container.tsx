import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
import LocationIcon from '@mui/icons-material/LocationOn';
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
                <ProfileCard
                    imageUrl={profileData.avatar_url}
                    imageAlt={profileData.login}
                    title={profileData.name ?? profileData.login}
                    subtitle={`@${profileData.login}`}
                    description={profileData.bio}
                    actionLabel="Visit profile on GitHub"
                    actionUrl={profileData.html_url}
                    stats={[
                        { label: 'Repos', value: profileData.public_repos },
                        { label: 'Followers', value: profileData.followers },
                        { label: 'Following', value: profileData.following },
                    ]}
                    infoItems={[
                        ...(profileData.email
                            ? [
                                  {
                                      icon: (
                                          <EmailIcon
                                              fontSize="small"
                                              color="action"
                                          />
                                      ),
                                      text: profileData.email,
                                  },
                              ]
                            : []),
                        ...(profileData.location
                            ? [
                                  {
                                      icon: (
                                          <LocationIcon
                                              fontSize="small"
                                              color="action"
                                          />
                                      ),
                                      text: profileData.location,
                                  },
                              ]
                            : []),
                        ...(profileData.blog
                            ? [
                                  {
                                      icon: (
                                          <LinkIcon
                                              fontSize="small"
                                              color="action"
                                          />
                                      ),
                                      text: profileData.blog,
                                      url: profileData.blog,
                                  },
                              ]
                            : []),
                    ]}
                />
            )}
        </Stack>
    );
};
