import { Organization } from '@/entities/organization/types';
import { Subscription } from '@/entities/subscription/types';
import { User } from '@/entities/user/types';

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

export interface Middleware {
    (state: StoreState, prevState: StoreState): void;
    loadInitialState?: () => Partial<StoreState>;
}

export type Store = StoreState & StoreActions;
