import { appRoutes } from '@/app/routes/routes';
import { useLocation } from 'react-router-dom';

/**
 * Matching simplified it since there's no nested routing, should have bfs implemented for this purpose
 */
export const useRouteLabel = () => {
    const location = useLocation();

    const current = appRoutes.find(r => r.path === location.pathname);

    return current?.title;
};
