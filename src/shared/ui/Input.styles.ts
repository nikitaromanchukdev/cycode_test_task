import styled from 'styled-components';

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const Label = styled.label`
    font-size: 0.95rem;
    color: #4a5568;
    font-weight: 500;
`;

export const Input = styled.input`
    padding: 0.75rem;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.2s ease;

    &:focus {
        outline: none;
        border-color: #667eea;
    }
`;
