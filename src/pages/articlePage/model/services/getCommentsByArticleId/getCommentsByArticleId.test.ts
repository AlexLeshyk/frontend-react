import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { getCommentsByArticleId } from './getCommentsByArticleId';

const data = {
  1: {
    user: {
      username: 'Alex',
      id: '1',
      avatar: 'https://avatarzo.ru/wp-content/uploads/oduvanchik-na-solncze.jpg',
    },
    text: 'some text',
    id: '1',
  },
  2: {
    user: {
      username: 'Dan',
      id: '2',
      avatar: 'https://avatarzo.ru/wp-content/uploads/oduvanchik-na-solncze.jpg',
    },
    text: 'new comment',
    id: '2',
  },
};

describe('getCommentsByArticleId', () => {
  test('success get comments by articleId', async () => {
    const thunk = new TestAsyncThunk(getCommentsByArticleId, {
      articleComments: { entities: data },
    });
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk('2');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('server error get comments by articleId', async () => {
    const thunk = new TestAsyncThunk(getCommentsByArticleId, {
      articleComments: { entities: data },
    });
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('2');

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('error');
  });
});
