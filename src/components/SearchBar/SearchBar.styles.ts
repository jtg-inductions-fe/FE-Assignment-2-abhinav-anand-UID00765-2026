import { Button, styled } from '@mui/material';

export const StyledSubmitButton = styled(Button)(({ theme: { spacing } }) => ({
    paddingLeft: spacing(4),
    paddingRight: spacing(4),
}));
