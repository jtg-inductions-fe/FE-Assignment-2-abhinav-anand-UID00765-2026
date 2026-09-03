import { Avatar, styled } from '@mui/material';

import { AVATAR_SIZES } from './Avatar.config';
import { StyledAvatarProps } from './Avatar.types';

export const StyledAvatar = styled(Avatar, {
    shouldForwardProp: (prop) => prop !== 'avatarSize',
})<StyledAvatarProps>(({ theme, avatarSize = 'sm' }) => {
    const {
        palette: { divider },
    } = theme;

    const { height, width, borderSize } = AVATAR_SIZES[avatarSize];

    return {
        width: width,
        height: height,
        border: `${borderSize} solid`,
        borderColor: divider,
    };
});
