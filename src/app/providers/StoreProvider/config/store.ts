import {
  CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';
import { scrollSaveReducer } from 'features/ScrollSave';
import { StateModel, ThunkExtraArg } from './StateModel';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
  initialSate?: StateModel,
  asyncReducers?: ReducersMapObject<StateModel>,
) {
  const rootReducers: ReducersMapObject<StateModel> = {
    ...asyncReducers,
    user: userReducer,
    scrollSave: scrollSaveReducer,
    // loginForm: loginReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateModel>>,
    devTools: __IS_DEV__,
    preloadedState: initialSate,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      },
    }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
