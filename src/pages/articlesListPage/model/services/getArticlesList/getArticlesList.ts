import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article/model/types/article';
import { getArticlesPageLimit } from '../../selectors/articlesPageSelectors';

interface GetArticlesListProps {
  page: number;
}

export const getArticlesList = createAsyncThunk<Array<Article>, GetArticlesListProps, ThunkConfig<string>>(
  'articlePage/getArticlesList',
  async (props, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;
    const { page = 1 } = props;
    const limit = getArticlesPageLimit(getState());

    try {
      const response = await extra.api.get<Array<Article>>('/articles', {
        params: { _expand: 'user', _page: page, _limit: limit },
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
