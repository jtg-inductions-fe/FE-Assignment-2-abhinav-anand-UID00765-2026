import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

import { GithubProfileContainer } from '@container';
import * as githubApiModule from '@services';
import { store } from '@store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const suggestions = [
    {
        login: 'abhinav854',
        avatar_url: 'https://avatars.githubusercontent.com/u/127008065?v=4',
    },
    {
        login: 'ABHINAV8543',
        avatar_url: 'https://avatars.githubusercontent.com/u/76526197?v=4',
    },
    {
        login: 'Abhinav8542',
        avatar_url: 'https://avatars.githubusercontent.com/u/269196366?v=4',
    },
    {
        login: 'Abhinav854301',
        avatar_url: 'https://avatars.githubusercontent.com/u/192417450?v=4',
    },
];

const User1 = {
    login: 'ABHINAV8543',
    id: 76526197,
    avatar_url: 'https://avatars.githubusercontent.com/u/76526197?v=4',
    html_url: 'https://github.com/ABHINAV8543',
    email: null,
    name: 'Abhinav Anand',
    blog: 'abhinavanand.me',
    location: 'Gurugram',
    bio: 'Associate Software Developer Intern @ Josh Technology Group',
    public_repos: 11,
    followers: 2,
    following: 0,
};

describe('GitHub Profile Integration', () => {
    it('search and display the profile card', async () => {
        const user = userEvent.setup({ delay: 10 });

        vi.spyOn(githubApiModule, 'useGetGithubUserQuery').mockImplementation(
            (username) => {
                if (username === User1.login) {
                    return {
                        data: User1,
                        isLoading: false,
                        isError: false,
                        error: null,
                        refetch: vi.fn(),
                    };
                }
                return {
                    data: null,
                    isLoading: false,
                    isError: false,
                    error: null,
                    refetch: vi.fn(),
                };
            },
        );

        vi.spyOn(
            githubApiModule,
            'useSearchGithubUsersQuery',
        ).mockImplementation((value) => {
            if (value === 'ABHINAV854') {
                return {
                    data: { items: suggestions },
                    isLoading: false,
                    isFetching: false,
                    isError: false,
                    error: null,
                    refetch: vi.fn(),
                };
            }
            return {
                data: [],
                isLoading: false,
                isError: false,
                error: null,
                refetch: vi.fn(),
            };
        });

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <GithubProfileContainer />
                </MemoryRouter>
            </Provider>,
        );

        // Interact with the SearchBar
        const input = screen.getByRole('combobox');
        await user.click(input);
        await user.type(input, 'ABHINAV854');

        // Wait for the suggestions
        const listbox = await screen.findByRole('listbox');
        expect(listbox).toBeInTheDocument();

        // Verify suggestions
        const options = screen.getAllByRole('option');
        expect(options.length).toBeGreaterThan(0);
        expect(options[1]).toHaveTextContent(User1.login);

        // Click option
        await user.click(options[1]);

        // Check if data rendered
        const userName = await screen.findByText(User1.name);
        expect(userName).toBeInTheDocument();

        const userBio = screen.getByText(User1.bio);
        expect(userBio).toBeInTheDocument();
    });
});
