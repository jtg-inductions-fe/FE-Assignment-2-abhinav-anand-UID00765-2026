import { Box, Link, Stack, Typography } from '@mui/material';

import { DetailItemsProps } from './DetailItems.types';

export const DetailItems = ({ items }: DetailItemsProps) => (
    <Stack direction="column" spacing={1.5} marginTop={2}>
        {items.map((item, index) => (
            <Stack
                key={index}
                direction="row"
                alignItems="center"
                spacing={1.5}
            >
                <Box display="flex" color="text.secondary" alignItems="center">
                    {item.icon}
                </Box>

                <Stack direction="row" gap={0.5}>
                    {item.label && (
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            component="span"
                            fontWeight="bold"
                            lines={1}
                        >
                            {`${item.label}:`}
                        </Typography>
                    )}

                    <Typography
                        variant="body2"
                        component="span"
                        color="text.primary"
                        lines={1}
                    >
                        {item.url ? (
                            <Link
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                underline="hover"
                                color="primary.main"
                            >
                                {item.value}
                            </Link>
                        ) : (
                            item.value
                        )}
                    </Typography>
                </Stack>
            </Stack>
        ))}
    </Stack>
);
