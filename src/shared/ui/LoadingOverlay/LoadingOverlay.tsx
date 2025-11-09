// shared/ui/Loader/Loader.tsx
import React from 'react';
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

const LoaderContainer = styled.div<{ $fullscreen?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: ${props => (props.$fullscreen ? '100vh' : '100px')};
    width: 100%;
`;

const DotsWrapper = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.utils.spacing(2)};
`;

const Dot = styled.div<{ $delay: number }>`
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

// ============================================================================
// Component
// ============================================================================
interface LoaderProps {
    fullscreen?: boolean;
}

export const LoadingOverlay: React.FC<LoaderProps> = ({ fullscreen = false }) => {
    return (
        <LoaderContainer $fullscreen={fullscreen}>
            <DotsWrapper>
                <Dot $delay={0} />
                <Dot $delay={0.15} />
                <Dot $delay={0.3} />
            </DotsWrapper>
        </LoaderContainer>
    );
};

// ============================================================================
// Usage Examples
// ============================================================================

/*
// Fullscreen loader
<Loader fullscreen />

// Inline loader (100px height)
<Loader />

// In a container
<div style={{ padding: '2rem' }}>
  <Loader />
</div>

// Conditional rendering
{loading && <Loader fullscreen />}
*/
