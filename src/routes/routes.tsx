// src/routes/routes.ts
import { lazy } from "react";

const WelcomePage = lazy(() => import("@/pages/Welcome"));
const SubscriptionsPage = lazy(() => import("@/pages/Subscriptions"));

export interface AppRoute {
    name: string;
    path: string;
    element: React.ReactNode;
    showInNav?: boolean; // controls visibility in Navbar
}

export const appRoutes: AppRoute[] = [
    {
        name: "Home",
        path: "/",
        element: <WelcomePage />,
        showInNav: true,
    },
    {
        name: "Subscriptions",
        path: "/subscriptions",
        element: <SubscriptionsPage />,
        showInNav: true,
    },
];
