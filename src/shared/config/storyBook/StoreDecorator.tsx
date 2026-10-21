import { FC } from 'react';
// eslint-disable-next-line
import { addCommentFormReducer } from '@/features/AddCommentForm/model/slice/addCommentFormSlice';
// eslint-disable-next-line
import { loginReducer } from '@/features/AuthUserName/model/slice/loginSlice';
// eslint-disable-next-line
import { profileReducer } from '@/features/EditableProfileCard/model/slice/profileSlice';
// eslint-disable-next-line
import { articleReducer } from '@/entities/Article/model/slices/articleSlice';
import { scrollSaveReducer } from '@/features/ScrollSave';
import { StoreProvider, StateModel } from '@/app/providers/StoreProvider';
// eslint-disable-next-line
import { articleDetailsPageReducer } from '@/pages/articlePage/model/slice';
// eslint-disable-next-line
import { articlesPageReducer } from '@/pages/articlesListPage/model/slice/articlesPageSlice';
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
