import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsModel } from 'entities/Article';
import { ProfileModel } from 'entities/Profile';
import { UserModel } from 'entities/User';
import { AddCommentFormModel } from 'features/AddCommentForm';
import { LoginModel } from 'features/AuthUserName/model/types/loginModel';
import { ArticleCommentsModel } from 'pages/articlePage';
import { ArticlePageModel } from 'pages/articlesListPage';
import { NavigateOptions, To } from 'react-router-dom';

export interface StateModel {
  user: UserModel,

  // async reducers
  loginForm?: LoginModel,
  profile?: ProfileModel,
  article?: ArticleDetailsModel,
  articleComments?: ArticleCommentsModel,
  addCommentForm?: AddCommentFormModel,
  articlesPage?: ArticlePageModel,
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

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateModel;
}
