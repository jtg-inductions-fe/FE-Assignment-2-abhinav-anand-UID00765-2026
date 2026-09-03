import { Link, Stack, Typography } from '@mui/material';

import { DetailItemsProps } from './DetailItems.types';

export const DetailItems = ({ items }: DetailItemsProps) => (
    <Stack direction="column" spacing={0.5} marginTop={2}>
        {items.map((item, index) => (
            <Stack key={index} direction="row" alignItems="center" spacing={1}>
                {item.icon}
                <Typography variant="body2" color="textSecondary" lines={1}>
                    {item.url ? (
                        <Link
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            color="inherit"
                        >
                            {item.text}
                        </Link>
                    ) : (
                        item.text
                    )}
                </Typography>
            </Stack>
        ))}
    </Stack>
);
