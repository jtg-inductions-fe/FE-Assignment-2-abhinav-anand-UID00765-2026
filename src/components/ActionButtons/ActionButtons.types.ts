export type ActionButtonsProps = {
    actions: {
        label: string;
        variant?: 'contained' | 'outlined';
        color?: 'primary' | 'secondary' | 'inherit';
        onClick?: () => void;
        href?: string;
        loading?: boolean;
        disabled?: boolean;
        url?: string;
    }[];
};
