import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CounterModel } from 'entities/Counter';
import { UserModel } from 'entities/User';
import { LoginModel } from 'features/AuthUserName/model/types/loginModel';

export interface StateModel {
  counter: CounterModel,
  user: UserModel,

  // async reducers
  loginForm?: LoginModel
}

export type StateModelKey = keyof StateModel;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateModel>;
  reduce: (state: StateModel, action: AnyAction) => CombinedState<StateModel>;
  add: (key: StateModelKey, reducer: Reducer) => void;
  remove: (key: StateModelKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateModel> {
  reducerManager: ReducerManager;
}
