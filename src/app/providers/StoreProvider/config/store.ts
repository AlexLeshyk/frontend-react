import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthUserName';
import { StateModel } from './StateModel';

export function createReduxStore(initialSate: StateModel) {
  const rootReducer: ReducersMapObject<StateModel> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };
  return configureStore<StateModel>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialSate,
  });
}
