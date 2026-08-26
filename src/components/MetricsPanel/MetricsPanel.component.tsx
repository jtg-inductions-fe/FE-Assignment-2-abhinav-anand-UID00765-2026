import { Box, Divider, Stack, Typography } from '@mui/material';

import { StyledProgressBar } from './MetricsPanel.styles';
import type { MetricsPanelProps } from './MetricsPanel.types';

export const MetricsPanel = ({ metrics, progress }: MetricsPanelProps) => {
    if (metrics.length === 0 && !progress) return null;

    return (
        <Box width="100%">
            <Box marginY={3}>
                <Divider />
            </Box>

            <Stack gap={2} marginBottom={3} flexWrap="wrap">
                {metrics.map((metric, index) => (
                    <Stack
                        key={index}
                        direction="row"
                        alignItems="center"
                        gap={2}
                    >
                        {metric.icon}
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            lines={1}
                        >
                            {metric.label}:{' '}
                            <Typography
                                component="span"
                                fontWeight="bold"
                                color="textPrimary"
                            >
                                {metric.value}
                            </Typography>
                        </Typography>
                    </Stack>
                ))}
            </Stack>

            {progress && (
                <Stack gap={1} marginTop={2}>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            lines={1}
                        >
                            {progress.label}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            lines={1}
                        >
                            {progress.text}
                        </Typography>
                    </Stack>

                    <StyledProgressBar
                        variant="determinate"
                        value={progress.percent}
                        color={progress.color || 'primary'}
                    />
                </Stack>
            )}
        </Box>
    );
};
