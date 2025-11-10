import { useEffect } from 'react';
import { useRouteLabel } from './useRouteLabel';

export const useCurrentPageTitle = () => {
    const label = useRouteLabel();

    useEffect(() => {
        document.title = label ?? '';
    }, [location.pathname]);
};
