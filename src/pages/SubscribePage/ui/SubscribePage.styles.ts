import { PrimaryButton } from '@/shared/ui/Button.styles';
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

export const SubscribeButton = styled(PrimaryButton)`
    padding: ${({ theme }) => theme.utils.spacing(6)} ${({ theme }) => theme.utils.spacing(12)};

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 25px rgba(102, 126, 234, 0.6);
    }

    &:active {
        transform: translateY(0);
    }
`;
