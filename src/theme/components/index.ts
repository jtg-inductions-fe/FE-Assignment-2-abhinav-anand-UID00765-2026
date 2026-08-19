import type { Components } from '@mui/material/styles';

// Local Font files
import InterRegularWOFF2 from '@assets/fonts/inter/inter-regular.woff2';

// Font face declarations
const fontFaceDeclarations = `
@font-face {
    font-display: swap;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    src: url(${InterRegularWOFF2}) format('woff2');
}
`;

export const components: Components = {
    MuiCssBaseline: {
        styleOverrides: `
            html {
                font-size: 62.5%;
            }
            ${fontFaceDeclarations}
        `,
    },
};
