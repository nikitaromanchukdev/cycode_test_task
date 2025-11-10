import React from 'react';
import { Dot, DotsWrapper, LoaderContainer } from './LoadingOverlay.styles';

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
