import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleDetailsModel } from '../types/articleDetailsModel';
import { getArticleById } from '../services/getArticleById/getArticleById';
import { Article } from '../types/article';

const initialState: ArticleDetailsModel = {
  isLoading: false,
  data: undefined,
  error: undefined,
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    updateArticle: (state, action: PayloadAction<Article>) => {
      state.form = {
        ...state.form, ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticleById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getArticleById.fulfilled, (
        state,
        action: PayloadAction<Article>,
      ) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      })
      .addCase(getArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articleActions } = articleSlice;
export const { reducer: articleReducer } = articleSlice;
