import { colorWithAlpha } from '@/utils/color';

export const theme = {
  colors: {
    backgroundLight: '#f5f5f5',
    backgroundDark: 'rgb(18, 18, 18)',
    text: '#333',

    smokyBlack: '#100C08',
    darkCharcoal: '#333333',
    outerSpace: '#2D383A',

    primary: '#FE7805',
  },
  fn: {
    withOpacity(color: string, percent: number) {
      return colorWithAlpha(color, percent);
    },
  },
} as const;

export type AppTheme = typeof theme;
