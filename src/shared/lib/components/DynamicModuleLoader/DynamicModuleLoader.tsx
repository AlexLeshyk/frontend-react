import { Reducer } from '@reduxjs/toolkit';
import { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { StateModel, StateModelKey } from '@/app/providers/StoreProvider/config/StateModel';
import { ReduxStoreWithManager } from '@/app/providers/StoreProvider';
import { useAppDispatch } from '@/shared/hooks';

export type ReducersList = {
  [name in StateModelKey]?: Reducer<NonNullable<StateModel[name]>>
}

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
  children: ReactNode;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const { children, reducers, removeAfterUnmount } = props;
  const dispatch = useAppDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();
    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateModelKey];
      if (!mounted) {
        store.reducerManager.add(name as StateModelKey, reducer);
        dispatch({ type: `@init ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateModelKey);
          dispatch({ type: `@destroy ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return (
    // eslint-disable-next-line
    <>
      {children}
    </>
  );
};
