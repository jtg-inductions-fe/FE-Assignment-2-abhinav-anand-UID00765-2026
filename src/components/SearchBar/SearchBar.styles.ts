import { Avatar, Button, styled } from '@mui/material';

export const StyledFormContainer = styled('form')(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(2),
    width: '100%',
}));

export const StyledSubmitButton = styled(Button)(({ theme }) => ({
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
}));

export const StyledOptionAvatar = styled(Avatar)(({ theme }) => ({
    width: 28,
    height: 28,
    marginRight: theme.spacing(2),
}));
