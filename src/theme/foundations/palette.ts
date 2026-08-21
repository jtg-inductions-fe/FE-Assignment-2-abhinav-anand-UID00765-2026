import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '../constants';

/* Custom Palette */
export const palette: PaletteOptions = {
    mode: 'dark',
    primary: {
        main: COLORS.PRIMARY.MAIN,
        light: COLORS.PRIMARY.LIGHT,
        dark: COLORS.PRIMARY.DARK,
    },
    secondary: {
        main: COLORS.SECONDARY.MAIN,
        light: COLORS.SECONDARY.LIGHT,
        dark: COLORS.SECONDARY.DARK,
    },
    background: {
        default: COLORS.BG.DEFAULT,
        paper: COLORS.BG.PAPER,
    },
    text: {
        primary: COLORS.TEXT.PRIMARY,
        secondary: COLORS.TEXT.SECONDARY,
    },
};
