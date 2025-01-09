import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateModel } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { ArticleCommentsModel } from '../types/articleCommentsModel';
import { getCommentsByArticleId } from '../services/getCommentsByArticleId/getCommentsByArticleId';

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment: Comment) => comment.id,
});

const articleCommentsSlice = createSlice({
  name: 'articleCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleCommentsModel>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCommentsByArticleId.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getCommentsByArticleId.fulfilled, (
        state,
        action: PayloadAction<Array<Comment>>,
      ) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, action.payload);
      })
      .addCase(getCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const getArticleComments = commentsAdapter.getSelectors<StateModel>(
  (state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState(),
);

export const { reducer: articleCommentsReducer } = articleCommentsSlice;
