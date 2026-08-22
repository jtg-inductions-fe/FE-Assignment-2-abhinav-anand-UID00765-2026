export type SearchBarProps = {
    onSearch: (username: string) => void;
    isLoading: boolean;
    initialValue: string;
    suggestions: string[];
    isSearching: boolean;
    onInputChange: (value: string) => void;
};
