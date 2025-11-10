export interface AppRoute {
    name: string;
    path: string;
    element: React.ReactNode;

    title: string;

    showInNav?: boolean;
}
