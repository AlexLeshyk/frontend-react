import { createAsyncThunk } from '@reduxjs/toolkit';
import { getArticleData } from '@/entities/Article/model/selectors/article';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';
import { getCommentsByArticleId } from '../getCommentsByArticleId/getCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'article/addCommentForArticle',
  async (text, thunkAPI) => {
    const {
      dispatch, rejectWithValue, extra, getState,
    } = thunkAPI;

    const userData = getUserAuthData(getState());
    const article = getArticleData(getState());

    if (!article || !userData || !text) {
      rejectWithValue('no data');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article?.id,
        userId: userData?.id,
        text,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(getCommentsByArticleId(article?.id));

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
