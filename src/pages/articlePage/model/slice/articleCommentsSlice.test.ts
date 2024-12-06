import { articleCommentsReducer } from './articleCommentsSlice';
import { ArticleCommentsModel } from '../types/articleCommentsModel';
import { getCommentsByArticleId } from '../services/getCommentsByArticleId/getCommentsByArticleId';

const comments = [
  {
    user: {
      username: 'Alex',
      id: '1',
      avatar: 'https://avatarzo.ru/wp-content/uploads/oduvanchik-na-solncze.jpg',
    },
    text: 'some text',
    id: '1',
  },
  {
    user: {
      username: 'Dan',
      id: '2',
      avatar: 'https://avatarzo.ru/wp-content/uploads/oduvanchik-na-solncze.jpg',
    },
    text: 'new comment',
    id: '2',
  },
];

describe('articleCommentsSlice', () => {
  test('test getCommentsByArticleId pending state', () => {
    const state: DeepPartial<ArticleCommentsModel> = {
      isLoading: false,
      error: 'error',
    };
    expect(articleCommentsReducer(
      state as ArticleCommentsModel,
      getCommentsByArticleId.pending,
    )).toEqual({ isLoading: true, error: undefined });
  });

  test('test getCommentsByArticleId fulfilled state', () => {
    const state: DeepPartial<ArticleCommentsModel> = {
      isLoading: true,
    };
    expect(articleCommentsReducer(
      state as ArticleCommentsModel,
      getCommentsByArticleId.fulfilled(comments, '1', ''),
    )).toEqual({
      isLoading: false,
      error: undefined,
      ids: ['1', '2'],
      entities: {
        1: comments[0],
        2: comments[1],
      },
    });
  });
});
