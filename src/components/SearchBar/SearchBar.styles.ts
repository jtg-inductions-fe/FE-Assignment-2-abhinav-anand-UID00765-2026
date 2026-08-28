import { Avatar, Button, styled } from '@mui/material';

export const StyledSubmitButton = styled(Button)(({ theme: { spacing } }) => ({
    paddingLeft: spacing(4),
    paddingRight: spacing(4),
}));

export const StyledOptionAvatar = styled(Avatar)(({ theme: { spacing } }) => ({
    width: 28,
    height: 28,
    marginRight: spacing(2),
}));
