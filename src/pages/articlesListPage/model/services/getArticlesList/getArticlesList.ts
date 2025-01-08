import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleModel, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib';
import {
  getArticlesPageLimit, getArticlesPageNumber, getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort,
  getArticlesPageType,
}
  from '../../selectors/articlesPageSelectors';

interface GetArticlesListProps {
  replace?: boolean;
}

export const getArticlesList = createAsyncThunk<Array<ArticleModel>, GetArticlesListProps, ThunkConfig<string>>(
  'articlePage/getArticlesList',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;
    const limit = getArticlesPageLimit(getState());
    const order = getArticlesPageOrder(getState());
    const sort = getArticlesPageSort(getState());
    const search = getArticlesPageSearch(getState());
    const page = getArticlesPageNumber(getState());
    const type = getArticlesPageType(getState());

    try {
      addQueryParams({
        order, sort, search, type,
      });
      const response = await extra.api.get<Array<ArticleModel>>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit,
          _sort: sort,
          _order: order,
          q: search,
          type: type === ArticleType.ALL ? undefined : type,
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
