import styled from 'styled-components';

export const UserName = styled.div`
    margin-bottom: 0.1em;

    font-size: 0.95rem;

    color: ${({ theme }) => theme.colors.text.primary};
`;

export const UserEmail = styled.div`
    font-size: 0.85rem;

    color: ${({ theme }) => theme.colors.text.secondary};
`;
