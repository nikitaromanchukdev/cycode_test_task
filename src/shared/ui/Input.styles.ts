import styled from 'styled-components';

export const Input = styled.input`
    padding: 0.75rem; // TODO: implement sizes

    background: ${({ theme }) => theme.colors.background.primary};

    border: 1px solid ${({ theme }) => theme.colors.border.primary};
    border-radius: 8px;

    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1rem;

    transition: border-color 0.2s ease;

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.border.focus};
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.text.tertiary};
    }
`;

export const RadioButton = styled.input`
    width: 16px;
    height: 16px;

    cursor: pointer;

    accent-color: ${({ theme }) => theme.colors.brand.secondary};
`;

export const Checkbox = styled.input`
    width: 16px;
    height: 16px;

    cursor: pointer;

    accent-color: ${({ theme }) => theme.colors.brand.secondary};
`;
