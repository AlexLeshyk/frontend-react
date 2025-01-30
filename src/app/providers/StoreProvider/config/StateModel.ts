import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsModel } from 'entities/Article';
import { UserModel } from 'entities/User';
import { AddCommentFormModel } from 'features/AddCommentForm';
import { LoginModel } from 'features/AuthUserName';
import { ProfileModel } from 'features/EditableProfileCard';
import { ScrollSaveModel } from 'features/ScrollSave';
import { ArticleDetailsPageModel } from 'pages/articlePage';
import { ArticlePageModel } from 'pages/articlesListPage';
import { rtkApi } from 'shared/api/rtkApi';

export interface StateModel {
  user: UserModel,
  scrollSave: ScrollSaveModel,
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // async reducers
  loginForm?: LoginModel,
  profile?: ProfileModel,
  article?: ArticleDetailsModel,
  addCommentForm?: AddCommentFormModel,
  articlesPage?: ArticlePageModel,
  articleDetailsPage?: ArticleDetailsPageModel
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
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateModel;
}
