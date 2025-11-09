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
