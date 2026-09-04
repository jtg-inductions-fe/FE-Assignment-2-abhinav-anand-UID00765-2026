import type { Components, Theme } from '@mui/material/styles';

// Local Font files
import Inter400WOFF2 from '@assets/fonts/inter/inter-400.woff2';
import Inter500WOFF2 from '@assets/fonts/inter/inter-500.woff2';
import Inter600WOFF2 from '@assets/fonts/inter/inter-600.woff2';
import Inter700WOFF2 from '@assets/fonts/inter/inter-700.woff2';

// Font face declarations
const fontFaceDeclarations = `
    @font-face {
        font-display: swap;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        src: url('${Inter400WOFF2}') format('woff2');
    }

    @font-face {
        font-display: swap;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        src: url('${Inter500WOFF2}') format('woff2');
    }

    @font-face {
        font-display: swap;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        src: url('${Inter600WOFF2}') format('woff2');
    }

    @font-face {
        font-display: swap;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        src: url('${Inter700WOFF2}') format('woff2');
    }
`;

export const components: Components<Theme> = {
    MuiCssBaseline: {
        styleOverrides: `
            html {
                font-size: 62.5%;
            }
            ${fontFaceDeclarations}
        `,
    },
    MuiTypography: {
        styleOverrides: {
            root: ({ ownerState, theme }) => {
                const lines = (ownerState as { lines?: number }).lines;
                const { mixins } = theme;

                if (lines) {
                    return {
                        ...mixins.lineClamp(lines),
                    };
                }
                return {};
            },
        },
    },
    MuiCard: {
        styleOverrides: {
            root: ({ theme }) => ({
                borderRadius: '1.2rem',
                boxShadow: `0.4rem 0.4rem 1rem ${theme.palette.text.secondary}50`,
            }),
        },
    },
};
