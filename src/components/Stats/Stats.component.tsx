import { Box, Typography } from '@mui/material';

import { StyledStack } from './Stats.styles';
import { StatsProps } from './Stats.types';

export const Stats = ({ stats }: StatsProps) => (
    <StyledStack direction="row" gap={2}>
        {stats.map((stat, index) => (
            <Box key={index} textAlign="center" flex={1}>
                <Typography variant="caption" color="textSecondary" lines={1}>
                    {stat.label}
                </Typography>
                <Typography variant="h6" fontWeight="bold" lines={1}>
                    {stat.value}
                </Typography>
            </Box>
        ))}
    </StyledStack>
);
