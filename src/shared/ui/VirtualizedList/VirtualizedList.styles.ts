import styled from 'styled-components';

export const Root = styled.div<{ $height: number }>`
    overflow-y: auto;
    height: ${props => props.$height}px;
`;

export const ScrolledFullSizeWrapper = styled.div<{ $height: number }>`
    position: relative;
    height: ${props => props.$height}px;
`;

export const RenderWindow = styled.div<{ $top: number }>`
    position: absolute;

    top: ${props => props.$top}px;

    width: 100%;
`;
