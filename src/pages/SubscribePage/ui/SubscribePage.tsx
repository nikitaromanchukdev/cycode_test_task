import { SubscribeButton, SubscribePageLayout, SubscribeSection } from './SubscribePage.styles';
import { useState } from 'react';
import { SubscriptionModal } from '@/features/subscription/ui/SubscriptionModal/SubscriptionModal';
import { Subscription } from '@/entities/subscription/types';
import { queryUsersGroupedByOrg } from '@/entities/user/api'; // TODO
import { queryOrgs } from '@/entities/organization/api'; // TODO
import { useNavigate } from 'react-router-dom';

/* TEMP */
const organizations = queryOrgs(); // TODO
const usersByOrg = queryUsersGroupedByOrg(); // TODO
/* TEMP end */

const SubscribePage: React.FC = () => {
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleSubmit = (orgId: number, userIds: number[]) => {
        const org = organizations.find(o => o.id === orgId);
        const users = usersByOrg[orgId]!.filter(u => userIds.includes(u.id));

        const newSubscription: Subscription = {
            organizationId: orgId,
            organizationName: org?.name || '',
            userIds: userIds,
            userNames: users.map(u => u.name),
        };

        localStorage.setItem('subscription', JSON.stringify(newSubscription));

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
