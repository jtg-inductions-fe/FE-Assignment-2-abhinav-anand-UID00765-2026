export type SearchBarProps<T> = {
    onSearch: (value: string) => void;
    isLoading: boolean;
    initialValue: string;
    suggestions: T[];
    isSearching: boolean;
    isSubmitDisabled: boolean;
    onInputChange: (value: string) => void;
    getOptionLabel: (option: T | string) => string;
    renderOptionContent?: (option: T) => React.ReactNode;
    getOptionKey?: (option: T) => string | number;
    label?: string;
    placeholder?: string;
};
