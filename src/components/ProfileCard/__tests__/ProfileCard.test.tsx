import { describe, expect, it } from 'vitest';

import { ProfileCard } from '@components';
import { render, screen } from '@testing-library/react';

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

describe('ProfileCard Component', () => {
    it('renders the user profile', () => {
        render(<ProfileCard user={User1} />);

        //Avatar
        const avatar = screen.getByAltText(User1.login);
        expect(avatar).toBeInTheDocument();
        expect(avatar).toHaveAttribute('src', User1.avatar_url);

        // Name
        expect(screen.getByText(User1.name)).toBeInTheDocument();

        // Username
        const username = screen.getByText('@' + User1.login);
        expect(username).toBeInTheDocument();
        expect(username).toHaveAttribute('href', User1.html_url);

        // Bio
        expect(screen.getByText(User1.bio)).toBeInTheDocument();

        // Location
        expect(screen.getByText(User1.location)).toBeInTheDocument();

        // Blog
        const blog = screen.getByText(User1.blog);
        expect(blog).toBeInTheDocument();
        expect(blog).toHaveAttribute('href');

        // Repos, Followers and Following
        expect(screen.getByText(User1.public_repos)).toBeInTheDocument();
        expect(screen.getByText(User1.followers)).toBeInTheDocument();
        expect(screen.getByText(User1.following)).toBeInTheDocument();

        // Github Profile Button
        const button = screen.getByText('Visit profile on GitHub');
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('href', User1.html_url);
    });
});
