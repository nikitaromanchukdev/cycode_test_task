import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    font-weight: 500;
    position: relative;
    padding: 4px 0;

    &.active {
        color: #61dafb;
    }
`;

export const Underline = styled.div<{ left: number; width: number }>`
    position: absolute;
    bottom: 0;
    left: ${({ left }) => left}px;

    height: 2px;
    width: ${({ width }) => width}px;

    background-color: #61dafb;

    transition: all 0.3s ease;
`;

export default StyledLink;
