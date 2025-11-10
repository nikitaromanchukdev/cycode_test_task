import styled from 'styled-components';

export const InfoLabel = styled.div`
    margin-top: 1rem;
    margin-bottom: 0.25rem;

    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text.tertiary};
`;

export const InfoValue = styled.div`
    margin-bottom: 0.5rem;

    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text.primary};
`;

export const UserList = styled.ul`
    margin-top: 0.5rem;

    list-style: none;
`;

export const UserItem = styled.li`
    padding: 0.25rem 0;

    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 1rem;
`;
