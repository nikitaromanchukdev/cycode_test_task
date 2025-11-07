const alphaFromPercent = (percent: number): string => {
    const clamped = Math.max(0, Math.min(100, percent));
    const alpha = Math.round((clamped / 100) * 255);

    return alpha.toString(16).toUpperCase().padStart(2, '0');
};

export const colorWithAlpha = (hex: string, percent: number): string => {
    const alpha = alphaFromPercent(percent);

    return `${hex}${alpha}`;
};
