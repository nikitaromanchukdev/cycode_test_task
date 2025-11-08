import { colorWithAlpha } from '@/utils/color';

const FACTOR = 5;
export const theme = {
    colors: {
        backgroundLight: '#F5F5F5',
        backgroundDark: '#121212',

        text: '#E5E5E5',
        textSecondary: '#A1A1A1',

        smokyBlack: '#100C08',
        darkCharcoal: '#333333',
        outerSpace: '#2D383A',

        primary: '#E5E5E5',
    },
    fn: {
        withOpacity(color: string, elevation: number) {
            const percent = 100 - elevation * FACTOR;

            return colorWithAlpha(color, percent);
        },
        borderRadius() {},
    },
} as const;

export type AppTheme = typeof theme;
