import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constant';

/* Custom Palette */
export const palette: PaletteOptions = {
    mode: 'dark',
    primary: {
        main: COLORS.primaryMain,
        light: COLORS.primaryLight,
        dark: COLORS.primaryDark,
    },
    secondary: {
        main: COLORS.secondaryMain,
        light: COLORS.secondaryLight,
        dark: COLORS.secondaryDark,
    },
    background: {
        default: COLORS.bgDefault,
        paper: COLORS.bgPaper,
    },
    text: {
        primary: COLORS.textPrimary,
        secondary: COLORS.textSecondary,
    },
};
