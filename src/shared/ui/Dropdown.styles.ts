import styled from 'styled-components';

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;
`;

export const Label = styled.label`
    font-size: 0.95rem;
    color: #fafafa;
    font-weight: 500;
`;

export const DropdownButton = styled.button`
    padding: 0.75rem;
    border: 1px solid #27272a;
    border-radius: 8px;
    font-size: 1rem;
    background: #09090b;
    color: #fafafa;
    cursor: pointer;
    text-align: left;
    transition: all 0.2s ease;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
        border-color: #3f3f46;
    }

    &:focus {
        outline: none;
        border-color: #8b5cf6;
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
    border-radius: 8px;
    max-height: 250px;
    overflow-y: auto;
    z-index: 100;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-bottom: 1px solid #27272a;
    background: #09090b;
    color: #fafafa;
    font-size: 0.95rem;

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
