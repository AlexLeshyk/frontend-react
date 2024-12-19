import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInited }
  from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { getArticlesList } from '../getArticlesList/getArticlesList';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlePage/initArticlesPage',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const inited = getArticlesPageInited(getState());

    if (!inited) {
      dispatch(articlesPageActions.initState());
      dispatch(getArticlesList({ page: 1 }));
    }
  },
);
