import styled from 'styled-components';

export const Card = styled.div`
    padding: ${({ theme }) => theme.utils.spacing(8)};
    margin: ${({ theme }) => theme.utils.spacing(8)} 0;

    background: ${({ theme }) => theme.colors.background.secondary};

    border: 1px solid ${({ theme }) => theme.colors.border.primary};
    border-radius: ${({ theme }) => theme.utils.spacing(3)};

    text-align: left;
`;

export const CardTitle = styled.h3`
    margin-bottom: 1rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${({ theme }) => theme.colors.status.success};
    font-size: 1.5rem;
`;
