import * as stylex from "@stylexjs/stylex";

export const DARK = '@media (prefers-color-scheme: dark)';

export const colors = stylex.defineVars({
    primary: {
        default: '#fff',
        [DARK]: '#fff',
    },
    secondary: {
        default: '#f9f9f9',
        [DARK]: '#f9f9f9',
    },
});