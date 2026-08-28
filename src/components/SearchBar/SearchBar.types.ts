import { GitHubUserListItem } from '@services';

export type SearchBarProps = {
    onSearch: (username: string) => void;
    isLoading: boolean;
    initialValue: string;
    suggestions: GitHubUserListItem[];
    isSearching: boolean;
    isSubmitDisabled: boolean;
    onInputChange: (value: string) => void;
};
