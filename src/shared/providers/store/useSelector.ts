import { useMemo } from 'react';
import { StoreSelector } from './types';
import { useStore } from './useStore';

/**
 * Naive simplified implementation
 */
export const useSelector = <T>(callback: StoreSelector<T>) => {
    const { getState } = useStore();

    return useMemo(() => callback(getState()), [callback, getState]);
};
