import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { getArticlesPageInited }
  from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { getArticlesList } from '../getArticlesList/getArticlesList';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlePage/initArticlesPage',
  async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const inited = getArticlesPageInited(getState());

    if (!inited) {
      const sortUrl = searchParams.get('sort') as ArticleSortField;
      const orderUrl = searchParams.get('order') as SortOrder;
      const searchUrl = searchParams.get('search');
      const typeUrl = searchParams.get('type') as ArticleType;

      if (sortUrl) {
        dispatch(articlesPageActions.setSort(sortUrl));
      }
      if (orderUrl) {
        dispatch(articlesPageActions.setOrder(orderUrl));
      }
      if (searchUrl) {
        dispatch(articlesPageActions.setSerch(searchUrl));
      }
      if (typeUrl) {
        dispatch(articlesPageActions.setType(typeUrl));
      }

      dispatch(articlesPageActions.initState());
      dispatch(getArticlesList({}));
    }
  },
);
