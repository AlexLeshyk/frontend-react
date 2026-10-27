import { FC } from 'react';
import { addCommentFormReducer } from '@/features/AddCommentForm/testing';
import { loginReducer } from '@/features/AuthUserName/testing';
import { profileReducer } from '@/features/EditableProfileCard/testing';

import { articleReducer } from '@/entities/Article/testing';
import { scrollSaveReducer } from '@/features/ScrollSave/testing';
import { StoreProvider, StateModel } from '@/app/providers/StoreProvider';
import { articleDetailsPageReducer } from '@/pages/articlePage/testing';
import { articlesPageReducer } from '@/pages/articlesListPage/testing';
import { rtkApi } from '@/shared/api/rtkApi';
import { ReducersList } from '@/shared/lib';

const defaultAsyncReducers: ReducersList = {
  [rtkApi.reducerPath]: rtkApi.reducer,
  loginForm: loginReducer,
  profile: profileReducer,
  article: articleReducer,
  articleDetailsPage: articleDetailsPageReducer,
  addCommentForm: addCommentFormReducer,
  articlesPage: articlesPageReducer,
  scrollSave: scrollSaveReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateModel>,
  asyncReducers?: ReducersList,
) => (StoryComponent: FC) => (
  <StoreProvider initalState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
