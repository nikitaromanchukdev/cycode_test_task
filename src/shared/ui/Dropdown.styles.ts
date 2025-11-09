import styled from 'styled-components';

export const FormGroup = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const Label = styled.label`
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 0.95rem;
    font-weight: 500;
`;

export const DropdownButton = styled.button`
    padding: 0.75rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: ${({ theme }) => theme.colors.background.primary};

    border: 1px solid ${({ theme }) => theme.colors.border.primary};
    border-radius: 8px;

    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1rem;
    text-align: left;

    cursor: pointer;

    transition: all 0.2s ease;

    &:hover {
        border-color: ${({ theme }) => theme.colors.border.hover};
    }

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.border.focus};
    }

    &:disabled {
        cursor: not-allowed;

        opacity: 0.5;
    }
`;

export const DropdownMenu = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 2;
    overflow-y: auto;

    max-height: 250px; // ? make configurable

    margin-top: 0.5rem;
    background: ${({ theme }) => theme.colors.background.secondary};
    border: 1px solid #27272a;

    border-radius: ${({ theme }) => theme.utils.spacing(2)};

    box-shadow: 0 4px 12px ${({ theme }) => theme.colors.shadow};
`;

export const SearchInput = styled.input`
    padding: 0.75rem; // TODO: implement sizes

    width: 100%;

    background: ${({ theme }) => theme.colors.background.primary};

    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};

    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 0.9rem; // TODO: implement sizes

    transition: border-color 0.2s ease;

    &:focus {
        outline: none;
        border-bottom-color: ${({ theme }) => theme.colors.border.focus};
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.text.tertiary};
    }
`;

export const DropdownItem = styled.div`
    padding: 0.75rem;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};

    cursor: pointer;

    transition: background 0.2s ease;

    &:last-child {
        border-bottom: none;
    }

    &:hover {
        background: ${({ theme }) => theme.colors.background.hover};
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

export const ItemLabel = styled.label`
    flex: 1;

    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 0.95rem;

    cursor: pointer;
`;

export const SelectedCount = styled.span`
    margin-left: 0.5rem;

    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.text.secondary};
`;

export const EmptyState = styled.div`
    padding: 1rem;

    color: ${({ theme }) => theme.colors.text.secondary};
    text-align: center;
`;

export const UserEmail = styled.div`
    font-size: 0.85rem;

    color: ${({ theme }) => theme.colors.text.secondary};
`;
