export type ProfileCardProps = {
    image?: {
        url: string;
        alt: string;
    };
    title: string;
    subtitle?: string;
    description?: string | null;
    children?: React.ReactNode;
};
