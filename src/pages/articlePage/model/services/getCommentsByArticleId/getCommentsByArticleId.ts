import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';

export const getCommentsByArticleId = createAsyncThunk<Array<Comment>, string | undefined, ThunkConfig<string>>(
  'article/getCommentsByArticleId',
  async (articleId, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;
    if (!articleId) {
      rejectWithValue('error');
    }
    try {
      const response = await extra.api.get<Array<Comment>>('/comments', {
        params: {
          articleId,
          _expand: 'user',
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
