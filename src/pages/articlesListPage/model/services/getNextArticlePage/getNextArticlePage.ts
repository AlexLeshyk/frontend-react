import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticlesPageHasPage, getArticlesPageIsLoading, getArticlesPageNumber }
  from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { getArticlesList } from '../getArticlesList/getArticlesList';

export const getNextArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlePage/getNextPage',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    const isLoading = getArticlesPageIsLoading(getState());
    const hasPage = getArticlesPageHasPage(getState());
    const page = getArticlesPageNumber(getState());

    if (hasPage && !isLoading) {
      dispatch(articlesPageActions.setPage(page + 1));
      dispatch(getArticlesList({}));
    }
  },
);
