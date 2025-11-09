import { Subscription } from '@/entities/subscription/types';

export interface StoreState {
    companyName: string;
    subscription: Subscription | null;
}

export interface StoreActions {
    setSubscription: (subscription: Subscription | null) => void;
    clearSubscription: () => void;
}

export interface Middleware {
    (state: StoreState, prevState: StoreState): void;
    loadInitialState?: () => Partial<StoreState>;
}

export type Store = StoreState & StoreActions;
