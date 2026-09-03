import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constants';

const { PRIMARY, SECONDARY, BACKGROUND, TEXT } = COLORS;

/* Custom Palette */
export const palette: PaletteOptions = {
    mode: 'dark',
    primary: {
        main: PRIMARY.MAIN,
        light: PRIMARY.LIGHT,
        dark: PRIMARY.DARK,
    },
    secondary: {
        main: SECONDARY.MAIN,
        light: SECONDARY.LIGHT,
        dark: SECONDARY.DARK,
    },
    background: {
        default: BACKGROUND.DEFAULT,
        paper: BACKGROUND.PAPER,
    },
    text: {
        primary: TEXT.PRIMARY,
        secondary: TEXT.SECONDARY,
    },
};
