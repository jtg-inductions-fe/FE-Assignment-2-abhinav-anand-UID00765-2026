import { ReactNode } from 'react';

export type MetricItem = {
    icon: ReactNode;
    label: string;
    value: string | number;
};

export type ProgressMetric = {
    label: string;
    text: string;
    percent: number;
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
};

export type MetricsPanelProps = {
    metrics: MetricItem[];
    progress?: ProgressMetric;
};
