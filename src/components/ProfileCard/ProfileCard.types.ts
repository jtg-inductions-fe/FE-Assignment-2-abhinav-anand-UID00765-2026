import type { ReactNode } from 'react';

export type InfoItem = {
    icon: ReactNode;
    text: string;
    url?: string;
};

export type StatItem = {
    label: string;
    value: string | number;
};

export type ProfileCardProps = {
    imageUrl: string;
    imageAlt: string;
    title: string;
    subtitle?: string;
    description?: string | null;
    infoItems?: InfoItem[];
    stats?: StatItem[];
    actionLabel?: string;
    actionUrl?: string;
};
