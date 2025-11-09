import styled from 'styled-components';

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;
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

    margin-top: 0.5rem;
    background: #18181b;
    border: 1px solid #27272a;

    border-radius: ${({ theme }) => theme.utils.spacing(2)};

    max-height: 250px;
    overflow-y: auto;
    z-index: 100;
    box-shadow: 0 4px 12px ${({ theme }) => theme.colors.shadow};
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-bottom: 1px solid #27272a;
    background: #09090b;
    color: #fafafa;
    font-size: 0.9rem;

    transition: border-color 0.2s ease;

    &:focus {
        outline: none;
        border-bottom-color: #8b5cf6;
    }

    &::placeholder {
        color: #71717a;
    }
`;

export const DropdownItem = styled.div`
    padding: 0.75rem;
    cursor: pointer;
    transition: background 0.2s ease;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border-bottom: 1px solid #27272a;

    &:last-child {
        border-bottom: none;
    }

    &:hover {
        background: #27272a;
    }
`;

export const RadioButton = styled.input`
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: #8b5cf6;
`;

export const Checkbox = styled.input`
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: #8b5cf6;
`;

export const ItemLabel = styled.label`
    flex: 1;
    cursor: pointer;
    color: #fafafa;
    font-size: 0.95rem;
`;

export const SelectedCount = styled.span`
    font-size: 0.85rem;
    color: #71717a;
    margin-left: 0.5rem;
`;

export const EmptyState = styled.div`
    padding: 1rem;
    text-align: center;
    color: #71717a;
`;

export const UserEmail = styled.div`
    font-size: 0.85rem;
    color: #71717a;
`;
