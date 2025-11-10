import { useStore } from '@/app/providers';
import {
    InfoLabel,
    InfoValue,
    SubscriptionInfo,
    SubscriptionTitle,
    UserItem,
    UserList,
} from './SubscriptionDetails.styles';

interface SubscriptionDetailsProps {}

export const SubscriptionDetails: React.FC<SubscriptionDetailsProps> = () => {
    const { subscription } = useStore();

    return (
        <>
            <SubscriptionInfo>
                <SubscriptionTitle>✓ Subscribed</SubscriptionTitle>

                <InfoLabel>Organization:</InfoLabel>

                <InfoValue>{subscription!.organizationName}</InfoValue>

                <InfoLabel>Selected Users:</InfoLabel>

                <UserList>
                    {subscription!.userNames.map((name, idx) => (
                        <UserItem key={idx}>• {name}</UserItem>
                    ))}
                </UserList>
            </SubscriptionInfo>
        </>
    );
};
