import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Typography } from '@mui/material';

import { ErrorButton, ErrorContainer } from './Error.styles';
import { ErrorDisplayProps } from './Error.types';

export const ErrorComponent: React.FC<ErrorDisplayProps> = ({
    title,
    message,
    titleColor = 'primary',
}) => {
    const navigate = useNavigate();

    return (
        <ErrorContainer>
            <Typography variant="h2" color={titleColor} gutterBottom>
                {title}
            </Typography>

            <Typography variant="h5" color="textSecondary">
                {message}
            </Typography>

            <ErrorButton
                variant="contained"
                onClick={() => {
                    void navigate('/');
                }}
            >
                Go Back Home
            </ErrorButton>
        </ErrorContainer>
    );
};
