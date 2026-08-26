import {
    Avatar,
    Box,
    Card,
    CardContent,
    Stack,
    styled,
    Typography,
} from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
    width: '100%',
    marginTop: theme.spacing(4),
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[3],
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
}));

export const StyledHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(3),
    alignItems: 'center',
    justifyContent: 'flex-start',
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: 120,
    height: 120,
    border: '4px solid',
    borderColor: theme.palette.divider,
}));

export const StyledUserInfo = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
});

export const StyledBodyWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(3),
    flexDirection: 'column',
    width: '100%',
}));

export const StyledContentBox = styled(Box)({
    width: '100%',
});

export const StyledBio = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(1),
}));

export const StyledInfoList = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.5),
}));

export const StyledInfoItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
}));

export const StyledStatsStack = styled(Stack)(({ theme }) => ({
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.spacing(2),
    width: '100%',
    justifyContent: 'space-around',
}));

export const StyledStatBox = styled(Box)({
    textAlign: 'center',
});

export const StyledButtonWrapper = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(3),
    width: '100%',
}));
