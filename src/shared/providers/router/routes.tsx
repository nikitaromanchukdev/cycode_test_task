import { lazy } from 'react';
import { AppRoute } from './types';

const WelcomePage = lazy(() => import('@/pages/HomePage/ui/HomePage'));
const SubscriptionsPage = lazy(() => import('@/pages/SubscribePage/ui/SubscribePage'));

export const appRoutes: AppRoute[] = [
    {
        title: 'Welcome Home',
        name: 'Home',
        path: '/',
        element: <WelcomePage />,
        showInNav: true,
    },
    {
        title: 'Subscribe to Our Newsletter',
        name: 'Subscriptions',
        path: '/subscriptions',
        element: <SubscriptionsPage />,
        showInNav: true,
    },
];
