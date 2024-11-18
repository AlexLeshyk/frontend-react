import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateModelKey } from 'app/providers/StoreProvider/config/StateModel';
import { FC, useEffect } from 'react';
import { useStore } from 'react-redux';
import { useAppDispatch } from 'shared/hooks';

export type ReducersList = {
  [name in StateModelKey]?: Reducer;
}

type ReducersListEntry = [StateModelKey, Reducer]

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount } = props;
  const dispatch = useAppDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@init ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
          store.reducerManager.remove(name);
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
