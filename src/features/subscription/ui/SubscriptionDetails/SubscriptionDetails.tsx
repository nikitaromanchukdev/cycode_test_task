import { useStore } from '@/app/providers';
import { Card, CardTitle } from '@/shared/ui';
import { InfoLabel, InfoValue, UserItem, UserList } from './SubscriptionDetails.styles';

interface SubscriptionDetailsProps {}

export const SubscriptionDetails: React.FC<SubscriptionDetailsProps> = () => {
    const { subscription } = useStore();

    return (
        <Card>
            <CardTitle $color="status.success">✓ Subscribed</CardTitle>

            <InfoLabel>Organization:</InfoLabel>

            <InfoValue>{subscription!.organizationName}</InfoValue>

            <InfoLabel>Selected Users:</InfoLabel>

            <UserList>
                {subscription!.userNames.map((name, idx) => (
                    <UserItem key={idx}>• {name}</UserItem>
                ))}
            </UserList>
        </Card>
    );
};
