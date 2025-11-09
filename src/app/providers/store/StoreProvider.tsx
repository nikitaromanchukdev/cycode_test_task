import { PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react';
import { StoreContext } from './context';
import { Middleware, Store, StoreState } from './types';
import { Subscription } from '@/entities/subscription/types';
import { defaultState } from './config';

interface StoreProviderProps {
    children: React.ReactNode;
    initialState?: Partial<StoreState>;
    middleware?: Middleware[];
}

const StoreProvider: React.FC<PropsWithChildren<StoreProviderProps>> = props => {
    const { children, initialState = {}, middleware = [] } = props;

    const [state, setState] = useState<StoreState>({
        ...defaultState,
        ...initialState,
    });

    const prevStateRef = useRef<StoreState>(state);

    useEffect(() => {
        const prevState = prevStateRef.current;

        middleware.forEach(mw => mw(state, prevState));
    }, [state, middleware]);

    const setSubscription = useCallback((subscription: Subscription | null) => {
        setState(prev => ({ ...prev, subscription }));
    }, []);

    const clearSubscription = useCallback(() => {
        setState(prev => ({ ...prev, subscription: null }));
    }, []);

    const store: Store = {
        ...state,
        setSubscription,
        clearSubscription,
    };

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
