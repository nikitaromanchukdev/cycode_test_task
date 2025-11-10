import { Organization } from '@/entities/organization/model';
import { Subscription } from '@/entities/subscription/model';
import { User } from '@/entities/user/model';

export interface StoreState {
    companyName: string;
    subscription: Subscription | null;

    users: User[];
    organizations: Organization[];
}

export interface StoreActions {
    setSubscription: (subscription: Subscription | null) => void;
    clearSubscription: () => void;

    setUsers: (data: User[]) => void;
    setOrganizations: (data: Organization[]) => void;
}

export interface StoreHelpers {
    getState: () => StoreState;
}

export interface StoreSelector<T = unknown> {
    (state: StoreState): T;
}

export interface Middleware {
    (state: StoreState, prevState: StoreState): void;
    loadInitialState?: () => Partial<StoreState>;
}

export type Store = StoreState & StoreActions & StoreHelpers;
