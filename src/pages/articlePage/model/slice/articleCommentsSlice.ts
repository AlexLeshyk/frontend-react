import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateModel } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { ArticleCommentsModel } from '../types/articleCommentsModel';

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment: Comment) => comment.id,
});

const articleCommentsSlice = createSlice({
  name: 'articleCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleCommentsModel>({
    isLoading: false,
    error: undefined,
    ids: ['1', '2'],
    entities: {
      1: {
        id: '1',
        user: {
          userName: 'A',
          id: '1',
        },
        text: 'some 1',
      },
      2: {
        id: '2',
        user: {
          userName: 'b',
          id: '3',
        },
        text: 'some 2',
      },
    },
  }),
  reducers: {

  },
});

export const getArticleComments = commentsAdapter.getSelectors<StateModel>(
  (state) => state.articleComments || commentsAdapter.getInitialState(),
);

export const { reducer: articleCommentsReducer } = articleCommentsSlice;
