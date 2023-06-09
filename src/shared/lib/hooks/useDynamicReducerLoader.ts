import { Reducer } from '@reduxjs/toolkit';
import { StateSchemaKey, StoreWithReducerManager } from 'app/providers/StoreProvider';
import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { useAppDispatch } from './AppDispatch';

export const useDynamicReducerLoader = (
    key: StateSchemaKey,
    reducer: Reducer,
    removeAfterUnmount = true
) => {
    const store = useStore() as StoreWithReducerManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch({ type: `@INIT ${key} reducer` });
        store.reducerManager.add(key, reducer);
        return () => {
            if (removeAfterUnmount) {
                store.reducerManager.remove(key);
                dispatch({ type: `@DESTROY ${key} reducer` });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
