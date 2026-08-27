import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
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
import {
    useCheckIfFollowingQuery,
    useFollowUserMutation,
    useGetGithubUserQuery,
    useSearchGithubUsersQuery,
    useUnfollowUserMutation,
} from '@services';
import { RootState } from '@store';

import { mapGithubProfile } from './GithubProfile.config';
import { StyledErrorAlert } from './GithubProfile.styles';

export const GithubProfileContainer = () => {
    // Current User
    const { user: currentUser } = useSelector((state: RootState) => state.auth);

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

    // Follow functionality logic
    const isOtherUser = Boolean(
        currentUser && profileData && currentUser.login !== profileData.login,
    );

    const { data: isFollowingUser, isLoading: isCheckLoading } =
        useCheckIfFollowingQuery(profileData?.login ?? '', {
            skip: !isOtherUser || !profileData,
        });

    const [followUser, { isLoading: isFollowing }] = useFollowUserMutation();
    const [unfollowUser, { isLoading: isUnfollowing }] =
        useUnfollowUserMutation();

    const handleFollowToggle = () => {
        if (!profileData) return;
        if (isFollowingUser) {
            void unfollowUser(profileData.login);
        } else {
            void followUser(profileData.login);
        }
    };

    const isFollowLoading = isCheckLoading || isFollowing || isUnfollowing;

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
        <ErrorBoundary>
            <Stack alignItems="center" width="100%">
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
                                <ActionButtons
                                    actions={[
                                        ...(isOtherUser
                                            ? [
                                                  {
                                                      label: isFollowingUser
                                                          ? 'Unfollow'
                                                          : 'Follow',
                                                      variant:
                                                          'outlined' as const,
                                                      onClick:
                                                          handleFollowToggle,
                                                      loading: isFollowLoading,
                                                  },
                                              ]
                                            : []),
                                        ...ProfleCardProps.action.actions,
                                    ]}
                                />
                            )}
                        </ProfileCard>
                    )}
            </Stack>
        </ErrorBoundary>
    );
};
