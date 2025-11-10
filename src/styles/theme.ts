import { colorWithAlpha } from '@/shared/lib';
import { Path } from '@/shared/lib';

export const theme = {
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
                from: '#667eea',
                to: '#764ba2',

                angle: '135deg',
            },

            primary: '#667eea',
            secondary: '#8b5cf6',
        },
        status: {
            success: '#22c55e',
        },

        overlay: 'rgba(0, 0, 0, 0.8)',
        overlayLight: 'rgba(0, 0, 0, 0.5)',

        shadow: {
            dark: 'rgba(0, 0, 0, 0.3)',
            brand: 'rgba(139, 92, 246, 0.3)',
            brandHover: 'rgba(102, 126, 234, 0.6)',
        },

        focusRing: 'rgba(139, 92, 246, 0.1)',
    },
    utils: {
        spacingBase: 4,
        opacityFactor: 5,

        withOpacity(color: string, elevation: number) {
            const percent = 100 - elevation * this.opacityFactor;

            return colorWithAlpha(color, percent);
        },
        borderRadius() {},
        spacing(factor: number, unit = 'px') {
            return `${factor * this.spacingBase}${unit}`;
        },
    },
} as const;

export type AppTheme = typeof theme;

export type ThemeColors = Path<AppTheme['colors']>;
