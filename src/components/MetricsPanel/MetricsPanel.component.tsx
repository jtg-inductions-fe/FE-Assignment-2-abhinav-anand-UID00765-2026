import { Box, Divider, Stack, Typography } from '@mui/material';

import { StyledProgressBar } from './MetricsPanel.styles';
import type { MetricsPanelProps } from './MetricsPanel.types';

export const MetricsPanel = ({ metrics, progress }: MetricsPanelProps) => {
    if (metrics.length === 0 && !progress) return null;

    return (
        <Box mt={3} width="100%">
            <Box mb={2}>
                <Divider />
            </Box>

            <Stack
                spacing={2}
                mb={progress ? 3 : 0}
                flexWrap="wrap"
            >
                {metrics.map((metric, index) => (
                    <Stack
                        key={index}
                        direction="row"
                        alignItems="center"
                        spacing={1}
                    >
                        {metric.icon}
                        <Typography variant="body2" color="textSecondary">
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
                <Box width="100%">
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        mb={0.5}
                    >
                        <Typography variant="body2" color="textSecondary">
                            {progress.label}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {progress.text}
                        </Typography>
                    </Stack>

                    <StyledProgressBar
                        variant="determinate"
                        value={progress.percent}
                        color={progress.color || 'primary'}
                    />
                </Box>
            )}
        </Box>
    );
};
