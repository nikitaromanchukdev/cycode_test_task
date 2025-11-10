import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  50% {
    transform: translateY(-20px);
    animation-timing-function: ease-out;
  }
`;

export const LoaderContainer = styled.div<{ $fullscreen?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: ${props => (props.$fullscreen ? '100vh' : '100px')};
    width: 100%;
`;

export const DotsWrapper = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.utils.spacing(2)};
`;

export const Dot = styled.div<{ $delay: number }>`
    width: 18px;
    height: 18px;
    background: linear-gradient(
        ${({ theme }) => theme.colors.brand.gradient.angle},
        ${({ theme }) => theme.colors.brand.secondary} 0%,
        ${({ theme }) => theme.colors.brand.primary} 100%
    );
    border-radius: 50%;
    animation: ${bounce} 0.7s infinite;
    animation-delay: ${props => props.$delay}s;
`;
