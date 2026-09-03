import React from 'react';

import { Box, Button, Stack, Typography } from '@mui/material';

import { ErrorProps } from './Error.types';

export const Error: React.FC<ErrorProps> = ({
    title,
    message,
    titleColor = 'primary',
    buttonText,
    onButtonClick,
}) => (
    <Stack
        flex={1}
        spacing={2}
        textAlign="center"
        justifyContent="center"
        gap={5}
    >
        <Box>
            <Typography variant="h2" color={titleColor}>
                {title}
            </Typography>

            <Typography variant="h5" color="textSecondary">
                {message}
            </Typography>
        </Box>

        {buttonText && onButtonClick && (
            <Box>
                <Button variant="contained" onClick={onButtonClick}>
                    {buttonText}
                </Button>
            </Box>
        )}
    </Stack>
);
