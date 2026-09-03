import { describe, expect, it, vi } from 'vitest';

import { ThemeProvider } from '@mui/material';

import { SearchBar } from '@components';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { theme } from '@theme';

describe('SearchBar Component', () => {
    // If the Searchbar and Button renders
    it('renders the input field and search button', () => {
        render(
            <SearchBar
                value={''}
                suggestions={[]}
                onSearch={vi.fn()}
                onInputChange={vi.fn()}
                isLoading={false}
                isSearching={false}
                isSubmitDisabled={false}
                placeholder="Enter GitHub username..."
                getOptionLabel={(option) =>
                    typeof option === 'string' ? option : ''
                }
            />,
        );

        const input = screen.getByPlaceholderText('Enter GitHub username...');
        expect(input).toBeInTheDocument();

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    // Data for Suggestion List
    const mockSuggestions = [
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

    // If suggestions are rendered and click is working
    it('displays suggestions and triggers onSearch when a user is clicked', async () => {
        const mockOnSearch = vi.fn();
        const user = userEvent.setup();

        render(
            <ThemeProvider theme={theme}>
                <SearchBar
                    value="ABHINAV854"
                    suggestions={mockSuggestions}
                    onSearch={mockOnSearch}
                    onInputChange={vi.fn()}
                    isLoading={false}
                    isSearching={false}
                    isSubmitDisabled={false}
                    placeholder="Enter GitHub username..."
                    getOptionLabel={(option) =>
                        typeof option === 'string' ? option : option.login
                    }
                    getOptionKey={(option) => option.login}
                    renderOptionContent={(option) => (
                        <span>{option.login}</span>
                    )}
                />
            </ThemeProvider>,
        );

        // In MUI the Autocomplete input has the aria role of "combobox"
        const input = screen.getByRole('combobox');
        await user.click(input);

        await user.keyboard('{ArrowDown}');

        // Wait for the dropdown "listbox" to render
        const listbox = await screen.findByRole('listbox');
        expect(listbox).toBeInTheDocument();

        // Verify suggestions
        const options = screen.getAllByRole('option');
        expect(options).toHaveLength(4);
        expect(options[0]).toHaveTextContent('abhinav854');
        expect(options[1]).toHaveTextContent('ABHINAV8543');
        expect(options[2]).toHaveTextContent('Abhinav8542');
        expect(options[3]).toHaveTextContent('Abhinav854301');

        // clicking the first option in the list
        await user.click(options[1]);

        // Component successfully passes the username back up to the parent
        expect(mockOnSearch).toHaveBeenCalledTimes(1);
        expect(mockOnSearch).toHaveBeenCalledWith('ABHINAV8543');
    });
});
