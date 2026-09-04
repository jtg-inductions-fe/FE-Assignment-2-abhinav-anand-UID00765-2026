export type DetailItemsProps = {
    items: {
        icon: React.ReactNode;
        label?: string;
        value: string | number;
        url?: string;
    }[];
};
