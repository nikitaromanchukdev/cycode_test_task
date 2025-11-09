import {
    InfoLabel,
    InfoValue,
    SubscriptionInfo,
    SubscriptionTitle,
    UserItem,
    UserList,
} from './SubscriptionDetails.styles';
import type { Subscription } from '@/entities/subscription/types';

interface SubscriptionDetailsProps {
    subscription: Subscription;
}

export const SubscriptionDetails: React.FC<SubscriptionDetailsProps> = ({ subscription }) => {
    return (
        <>
            <SubscriptionInfo>
                <SubscriptionTitle>✓ Subscribed</SubscriptionTitle>

                <InfoLabel>Organization:</InfoLabel>

                <InfoValue>{subscription.organizationName}</InfoValue>

                <InfoLabel>Selected Users:</InfoLabel>

                <UserList>
                    {subscription.userNames.map((name, idx) => (
                        <UserItem key={idx}>• {name}</UserItem>
                    ))}
                </UserList>
            </SubscriptionInfo>
        </>
    );
};
