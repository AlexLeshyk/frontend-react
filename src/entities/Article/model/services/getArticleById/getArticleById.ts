import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '../../types/article';

export const getArticleById = createAsyncThunk<Article, string | undefined, ThunkConfig<string>>(
  'article/getArticleById',
  async (articleId, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;
    try {
      if (!articleId) {
        throw new Error('');
      }

      const response = await extra.api.get<Article>(`/articles/${articleId}`, {
        params: { _expand: 'user' },
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
