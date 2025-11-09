import { Subscription } from '@/entities/subscription/types';
import { PageLayout } from '@/shared/ui/PageLayout/PageLayout';
import {
    InfoLabel,
    InfoValue,
    SubscriptionInfo,
    SubscriptionTitle,
    UserItem,
    UserList,
    WelcomeMessage,
    WelcomeSection,
    WelcomeText,
} from './HomePage.styles';
import { ActionButton } from '@/shared/ui/Button.styles';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const [subscription, setSubscription] = useState<Subscription | null>(null);

    useEffect(() => {
        const saved = localStorage.getItem('subscription');
        if (saved) {
            setSubscription(JSON.parse(saved));
        }
    }, []);

    return (
        <PageLayout title="Welcome Home">
            <WelcomeSection>
                {subscription ? (
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

                        <WelcomeText>
                            You're all set! You'll receive updates for the selected organization and
                            users.
                        </WelcomeText>
                    </>
                ) : (
                    <>
                        <WelcomeMessage>Welcome to TechVista Inc.</WelcomeMessage>
                        <WelcomeText>
                            Discover innovative solutions that transform your business. Join
                            thousands of satisfied customers who trust us to deliver excellence.
                            Stay updated with our latest news and exclusive offers.
                        </WelcomeText>

                        <ActionButton onClick={() => navigate('subscriptions')}>
                            Get Started
                        </ActionButton>
                    </>
                )}
            </WelcomeSection>
        </PageLayout>
    );
};

export default HomePage;
