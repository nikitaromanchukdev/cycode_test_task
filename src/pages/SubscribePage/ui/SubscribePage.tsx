import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@/app/providers'; // TODO
import { useSelector } from '@/app/providers/store/useSelector'; // TODO
import { Subscription } from '@/entities/subscription/model';
import { Organization } from '@/entities/organization/model';
import { User } from '@/entities/user/model';
import { getUserFullName, getUserKey, getUserOrgId } from '@/entities/user/lib';
import { getOrgKey } from '@/entities/organization/lib';
import { SubscriptionModal } from '@/widgets/SubscriptionModal/ui/SubscriptionModal';
import { SubscribeButton, SubscribePageLayout, SubscribeSection } from './SubscribePage.styles';

const SubscribePage: React.FC = () => {
    const navigate = useNavigate();
    const { organizations, setSubscription } = useStore();

    const usersByOrg = useSelector(
        useCallback(store => Object.groupBy(store.users, getUserOrgId), [])
    );

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleSubmit = (orgId: Organization['id'], userIds: Array<User['id']>) => {
        const org = organizations.find(org => getOrgKey(org) === orgId)!;
        const users = usersByOrg[orgId]!.filter(user => userIds.includes(getUserKey(user)));

        const newSubscription: Subscription = {
            organizationId: orgId,
            organizationName: org.name || '',
            userIds: userIds,
            userNames: users.map(getUserFullName),
        };

        setSubscription(newSubscription);

        setIsModalOpen(false);
        navigate('/');
    };

    return (
        <SubscribePageLayout title="Subscribe to Our Newsletter">
            <SubscribeSection>
                <SubscribeButton onClick={() => setIsModalOpen(true)}>Subscribe</SubscribeButton>
            </SubscribeSection>

            <SubscriptionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleSubmit}
            />
        </SubscribePageLayout>
    );
};

export default SubscribePage;
