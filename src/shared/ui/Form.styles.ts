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
