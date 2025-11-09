import { PageLayout } from '@/shared/ui/PageLayout/PageLayout';
import { Content } from '@/shared/ui/PageLayout/PageLayout.styles';
import styled from 'styled-components';

export const SubscribeSection = styled(Content)`
    flex-grow: 1;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SubscribePageLayout = styled(PageLayout)`
    display: flex;
    flex-direction: column;
`;
