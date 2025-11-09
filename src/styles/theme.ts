import { colorWithAlpha } from '@/utils/color';

const FACTOR = 5;
export const theme = {
    legacyColors: {
        backgroundLight: '#F5F5F5',
        backgroundDark: '#121212',

        text: '#E5E5E5',
        textSecondary: '#A1A1A1',

        smokyBlack: '#100C08',
        darkCharcoal: '#333333',
        outerSpace: '#2D383A',

        primary: '#E5E5E5',
    },
    colors: {
        background: {
            primary: '#09090b',
            secondary: '#18181b',
            hover: '#27272a',
            disabled: '#27272a',
        },
        text: {
            primary: '#fafafa',
            secondary: '#a1a1aa',
            tertiary: '#71717a',
        },
        border: {
            primary: '#27272a',
            hover: '#3f3f46',
            focus: '#8b5cf6',
        },
        brand: {
            gradient: {
                from: '#8b5cf6',
                to: '#6366f1',
            },
            primary: '#8b5cf6',
            secondary: '#6366f1',
        },
        status: {
            success: '#22c55e',
        },

        overlay: 'rgba(0, 0, 0, 0.8)',
        overlayLight: 'rgba(0, 0, 0, 0.5)',
        shadow: 'rgba(0, 0, 0, 0.3)',
        brandShadow: 'rgba(139, 92, 246, 0.3)',
        brandShadowHover: 'rgba(139, 92, 246, 0.4)',
        focusRing: 'rgba(139, 92, 246, 0.1)',
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
