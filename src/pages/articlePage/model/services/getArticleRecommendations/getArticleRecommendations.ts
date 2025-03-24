import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleModel } from '@/entities/Article';

export const getArticleRecommendations = createAsyncThunk<Array<ArticleModel>, void, ThunkConfig<string>>(
  'articlePage/getArticleRecommendations',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;

    try {
      const response = await extra.api.get<Array<ArticleModel>>('/articles', {
        params: {
          _limit: 4,
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
