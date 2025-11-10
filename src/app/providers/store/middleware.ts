import { Middleware, StoreState } from './types';

type StoreStateKey = keyof StoreState;

interface PersistConfig {
    key: string;
    fields: StoreStateKey[];
}

export const createLocalStorageMiddleware = (config: PersistConfig): Middleware => {
    const { key, fields } = config;

    const loadInitialState = (): Partial<StoreState> => {
        try {
            const stored = localStorage.getItem(key);

            if (stored) {
                const parsed = JSON.parse(stored);

                const filtered = new Map<StoreStateKey, Partial<StoreState>[StoreStateKey]>();

                fields.forEach(field => {
                    if (parsed[field] !== undefined) {
                        filtered.set(field, parsed[field]);
                    }
                });

                return Object.fromEntries(filtered);
            }
        } catch (error) {
            console.error('Failed to load from localStorage:', error);
        }

        return {};
    };

    const middleware: Middleware = state => {
        try {
            const dataToPersist: Map<StoreStateKey, Partial<StoreState>[StoreStateKey]> = new Map();

            fields.forEach(field => {
                dataToPersist.set(field, state[field]);
            });

            localStorage.setItem(key, JSON.stringify(Object.fromEntries(dataToPersist)));
        } catch (error) {
            console.error('Failed to save to localStorage:', error);
        }
    };

    middleware.loadInitialState = loadInitialState;

    return middleware;
};

export const loadMiddlewareState = (middleware: Middleware[]): Partial<StoreState> => {
    return middleware.reduce((acc, mw) => {
        const loaded = mw.loadInitialState?.() ?? null;

        return { ...acc, ...loaded };
    }, {});
};
