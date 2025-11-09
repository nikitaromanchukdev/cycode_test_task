import { PageLayout } from '@/shared/ui/PageLayout/PageLayout';
import { WelcomeMessage, WelcomeSection, WelcomeText } from './HomePage.styles';
import { PrimaryButton } from '@/shared/ui/Button.styles';
import { useNavigate } from 'react-router-dom';
import { SubscriptionDetails } from '@/features/subscription/ui/SubscriptionDetails/SubscriptionDetails';
import { useStore } from '@/app/providers/store/useStore';

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const { companyName, subscription } = useStore();

    return (
        <PageLayout title="Welcome Home">
            <WelcomeSection>
                {subscription && (
                    <>
                        <SubscriptionDetails subscription={subscription} />

                        <WelcomeText>
                            You're all set! You'll receive updates for the selected organization and
                            users.
                        </WelcomeText>
                    </>
                )}

                {!subscription && (
                    <>
                        <WelcomeMessage>Welcome to {companyName}.</WelcomeMessage>

                        <WelcomeText>
                            Discover innovative solutions that transform your business. Join
                            thousands of satisfied customers who trust us to deliver excellence.
                            Stay updated with our latest news and exclusive offers.
                        </WelcomeText>

                        <PrimaryButton onClick={() => navigate('subscriptions')}>
                            Get Started
                        </PrimaryButton>
                    </>
                )}
            </WelcomeSection>
        </PageLayout>
    );
};

export default HomePage;
