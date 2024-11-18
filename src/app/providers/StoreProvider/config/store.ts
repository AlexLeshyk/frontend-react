import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateModel } from './StateModel';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
  initialSate: StateModel,
  asyncReducers: ReducersMapObject<StateModel>,
) {
  const rootReducers: ReducersMapObject<StateModel> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    // loginForm: loginReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateModel>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialSate,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
