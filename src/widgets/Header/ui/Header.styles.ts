import styled from 'styled-components';
import { NavLink as _NavLink } from 'react-router-dom';

export const NavBar = styled.nav`
    position: sticky;
    top: 0;

    padding: 1rem 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: ${({ theme }) => theme.colors.background.secondary};

    border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};

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
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.5rem;
    font-weight: 600;
`;

export const NavLinks = styled.div`
    display: flex;
    gap: 2rem;
`;

export const NavLink = styled(_NavLink)`
    padding: 0.5rem 1rem;

    background-color: transparent;

    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 1rem;
    text-decoration: none;

    border: none;
    border-radius: ${({ theme }) => theme.utils.spacing(2)};

    cursor: pointer;

    transition: all 0.2s ease;

    &.active {
        background-color: ${({ theme }) => theme.colors.background.hover};
        color: ${({ theme }) => theme.colors.text.primary};
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.background.hover};
        color: ${({ theme }) => theme.colors.text.primary};
    }
`;
