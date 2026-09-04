import { describe, expect, it } from 'vitest';

import { ThemeProvider } from '@mui/material';

import { ProfileCard } from '@components';
import { render, screen } from '@testing-library/react';
import { theme } from '@theme';

const User1 = {
    image: {
        url: 'https://avatars.githubusercontent.com/u/76526197?v=4',
        alt: 'ABHINAV8543',
    },
    title: 'Abhinav Anand',
    subtitle: '@ABHINAV8543',
    description: 'Associate Software Developer Intern @ Josh Technology Group',
    infoItems: [
        { icon: <span />, text: 'Gurugram' },
        {
            icon: <span />,
            text: 'abhinavanand.me',
            url: 'https://abhinavanand.me',
        },
    ],
    stats: [
        { label: 'Repos', value: 11 },
        { label: 'Followers', value: 2 },
        { label: 'Following', value: 0 },
    ],
    action: {
        label: 'Visit profile on GitHub',
        url: 'https://github.com/ABHINAV8543',
    },
};

describe('ProfileCard Component', () => {
    it('renders the user profile', () => {
        render(
            <ThemeProvider theme={theme}>
                <ProfileCard {...User1} />
            </ThemeProvider>,
        );

        //Avatar
        const avatar = screen.getByAltText(User1.image.alt);
        expect(avatar).toBeInTheDocument();
        expect(avatar).toHaveAttribute('src', User1.image.url);

        // Name
        expect(screen.getByText(User1.title)).toBeInTheDocument();

        // Username
        const username = screen.getByText(User1.subtitle);
        expect(username).toBeInTheDocument();

        // Bio
        expect(screen.getByText(User1.description)).toBeInTheDocument();
    });
});
