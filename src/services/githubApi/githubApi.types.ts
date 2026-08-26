export type GitHubUser = {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    email: string | null;
    name: string | null;
    blog: string | null;
    location: string | null;
    bio: string | null;
    public_repos: number;
    followers: number;
    following: number;
};

export type GitHubUserListItem = {
    login: string;
    avatar_url: string;
};

export type GithubUserList = {
    total_count: number;
    items: GitHubUserListItem[];
};
