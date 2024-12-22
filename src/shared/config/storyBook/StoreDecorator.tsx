import { StoreProvider, StateModel } from 'app/providers/StoreProvider';
import { articleReducer } from 'entities/Article/model/slices/articleSlice';
import { profileReducer } from 'entities/Profile';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import { loginReducer } from 'features/AuthUserName/model/slice/loginSlice';
import { scrollSaveReducer } from 'features/ScrollSave';
import { articleCommentsReducer } from 'pages/articlePage/model/slice/articleCommentsSlice';
import { articlesPageReducer } from 'pages/articlesListPage/model/slice/articlesPageSlice';
import { FC } from 'react';
import { ReducersList } from 'shared/lib';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  article: articleReducer,
  articleComments: articleCommentsReducer,
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
