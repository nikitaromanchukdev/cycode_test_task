import styled from 'styled-components';
import { NavLink as _NavLink } from 'react-router-dom';

export const NavBar = styled.nav`
    position: sticky;
    top: 0;

    background: #18181b;
    border-bottom: 1px solid #27272a;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    z-index: 2;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

export const LogoImage = styled.img`
    zoom: 120%;

    object-fit: fill;
`;

export const CompanyName = styled.span`
    color: #fafafa;
    font-size: 1.5rem;
    font-weight: 600;
`;

export const NavLinks = styled.div`
    display: flex;
    gap: 2rem;
`;

export const NavLink = styled(_NavLink)`
    background-color: transparent;
    color: #a1a1aa;

    text-decoration: none;

    border: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.2s ease;

    &.active {
        background-color: #27272a;
        color: #fafafa;
    }

    &:hover {
        background-color: #27272a;
        color: #fafafa;
    }
`;
