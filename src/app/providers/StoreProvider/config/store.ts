import {
  CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { rtkApi } from '@/shared/api/rtkApi';
import { scrollSaveReducer } from '@/features/ScrollSave';
import { $api } from '@/shared/api/api';
import { userReducer } from '@/entities/User';
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
    [rtkApi.reducerPath]: rtkApi.reducer,
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
    }).concat(rtkApi.middleware),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}
