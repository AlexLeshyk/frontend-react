import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article/model/types/article';
import {
  getArticlesPageLimit, getArticlesPageNumber, getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort,
}
  from '../../selectors/articlesPageSelectors';

interface GetArticlesListProps {
  replace?: boolean;
}

export const getArticlesList = createAsyncThunk<Array<Article>, GetArticlesListProps, ThunkConfig<string>>(
  'articlePage/getArticlesList',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;
    const limit = getArticlesPageLimit(getState());
    const order = getArticlesPageOrder(getState());
    const sort = getArticlesPageSort(getState());
    const search = getArticlesPageSearch(getState());
    const page = getArticlesPageNumber(getState());

    try {
      const response = await extra.api.get<Array<Article>>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit,
          _sort: sort,
          _order: order,
          q: search,
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
