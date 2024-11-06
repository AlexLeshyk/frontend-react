import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateModel } from './StateModel';

export function createReduxStore(initialSate: StateModel) {
  return configureStore<StateModel>({
    reducer: { counter: counterReducer },
    devTools: __IS_DEV__,
    preloadedState: initialSate,
  });
}
