import styled from 'styled-components';
import { Content } from '@/shared/ui/PageLayout/PageLayout.styles';

export const WelcomeSection = styled(Content)`
    text-align: center;
`;

export const WelcomeMessage = styled.h2`
    margin-bottom: 1.5rem;

    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 2rem;
    line-height: 1.5;
`;

export const WelcomeText = styled.p`
    margin-bottom: 2rem;

    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 1.1rem;
    line-height: 1.6;
`;

export const SubscriptionInfo = styled.div`
    padding: 2rem;
    margin: 2rem 0;

    background: ${({ theme }) => theme.colors.background.secondary};

    border: 1px solid ${({ theme }) => theme.colors.border.primary};
    border-radius: ${({ theme }) => theme.utils.spacing(3)};

    text-align: left;
`;

export const SubscriptionTitle = styled.h3`
    margin-bottom: 1rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${({ theme }) => theme.colors.status.success};
    font-size: 1.5rem;
`;

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
