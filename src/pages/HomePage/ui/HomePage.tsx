import { useNavigate } from 'react-router-dom';
import { useStore } from '@/shared/providers';
import { PageLayout, PrimaryButton } from '@/shared/ui';
import { SubscriptionDetails } from '@/features/subscription/ui';
import { WelcomeMessage, WelcomeSection, WelcomeText } from './HomePage.styles';

const WelcomePage: React.FC = () => {
    const navigate = useNavigate();

    const { companyName, subscription } = useStore();

    return (
        <PageLayout title="Welcome Home">
            <WelcomeSection>
                {subscription && (
                    <>
                        <SubscriptionDetails />

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

export default WelcomePage;
