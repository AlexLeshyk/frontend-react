import {
  AnyAction, combineReducers, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ReducerManager, StateModel, StateModelKey } from './StateModel';

export function createReducerManager(initialReducers: ReducersMapObject<StateModel>)
: ReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: Array<StateModelKey> = [];

  return {
    getReducerMap: () => reducers,

    reduce: (state: StateModel, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((key) => {
          delete state[key];
        });
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },

    add: (key: StateModelKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;

      combinedReducer = combineReducers(reducers);
    },

    remove: (key: StateModelKey) => {
      if (!key || !reducers[key]) {
        return;
      }
      delete reducers[key];

      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
}
