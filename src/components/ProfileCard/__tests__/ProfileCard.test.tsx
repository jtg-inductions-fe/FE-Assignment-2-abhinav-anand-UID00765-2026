import { describe, expect, it } from 'vitest';

import { ProfileCard } from '@components';
import { render, screen } from '@testing-library/react';

const User1 = {
    imageUrl: 'https://avatars.githubusercontent.com/u/76526197?v=4',
    imageAlt: 'ABHINAV8543',
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
    actionLabel: 'Visit profile on GitHub',
    actionUrl: 'https://github.com/ABHINAV8543',
};

describe('ProfileCard Component', () => {
    it('renders the user profile', () => {
        render(<ProfileCard {...User1} />);

        //Avatar
        const avatar = screen.getByAltText(User1.imageAlt);
        expect(avatar).toBeInTheDocument();
        expect(avatar).toHaveAttribute('src', User1.imageUrl);

        // Name
        expect(screen.getByText(User1.title)).toBeInTheDocument();

        // Username
        const username = screen.getByText(User1.subtitle);
        expect(username).toBeInTheDocument();

        // Bio
        expect(screen.getByText(User1.description)).toBeInTheDocument();

        // Location
        expect(screen.getByText(User1.infoItems[0].text)).toBeInTheDocument();

        // Blog
        const blog = screen.getByText(User1.infoItems[1].text);
        expect(blog).toBeInTheDocument();
        expect(blog).toHaveAttribute('href');

        // Repos, Followers and Following
        expect(screen.getByText(User1.stats[0].label)).toBeInTheDocument();
        expect(screen.getByText(User1.stats[1].label)).toBeInTheDocument();
        expect(screen.getByText(User1.stats[2].label)).toBeInTheDocument();

        // Github Profile Button
        const button = screen.getByText('Visit profile on GitHub');
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('href', User1.actionUrl);
    });
});
