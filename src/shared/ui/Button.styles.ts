import styled from 'styled-components';

export const ActionButton = styled.button`
    padding: ${({ theme }) => theme.utils.spacing(4)} ${({ theme }) => theme.utils.spacing(10)};

    background: linear-gradient(
        ${({ theme }) => theme.colors.brand.gradient.angle},
        ${({ theme }) => theme.colors.brand.gradient.from} 0%,
        ${({ theme }) => theme.colors.brand.gradient.to} 100%
    );

    border: none;
    border-radius: ${({ theme }) => theme.utils.spacing(2)};

    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.1rem;
    font-weight: 600;

    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
    box-shadow: 0 4px 15px ${({ theme }) => theme.colors.shadow.brand};

    cursor: pointer;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px ${({ theme }) => theme.colors.shadow.brandHover};
    }

    &:active {
        transform: translateY(0);
    }
`;
