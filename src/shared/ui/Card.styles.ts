import styled from 'styled-components';
import { ThemeColors } from '@/styles/theme';

export const Card = styled.div`
    padding: ${({ theme }) => theme.utils.spacing(8)};
    margin: ${({ theme }) => theme.utils.spacing(8)} 0;

    background: ${({ theme }) => theme.colors.background.secondary};

    border: 1px solid ${({ theme }) => theme.colors.border.primary};
    border-radius: ${({ theme }) => theme.utils.spacing(3)};

    text-align: left;
`;

export const CardTitle = styled.h3<{ $color?: ThemeColors }>`
    margin-bottom: 1rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${({ $color, theme }) => $color || theme.colors.status.success};
    font-size: 1.5rem;
`;
