import { StoreProvider, StateModel } from 'app/providers/StoreProvider';
import { articleReducer } from 'entities/Article/model/slices/articleSlice';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import { loginReducer } from 'features/AuthUserName/model/slice/loginSlice';
import { profileReducer } from 'features/EditableProfileCard/model/slice/profileSlice';
import { scrollSaveReducer } from 'features/ScrollSave';
import { articleDetailsPageReducer } from 'pages/articlePage/model/slice';
import { articlesPageReducer } from 'pages/articlesListPage/model/slice/articlesPageSlice';
import { FC } from 'react';
import { rtkApi } from 'shared/api/rtkApi';
import { ReducersList } from 'shared/lib';

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
