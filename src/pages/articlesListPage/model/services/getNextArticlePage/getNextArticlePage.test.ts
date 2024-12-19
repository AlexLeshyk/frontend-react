import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { getNextArticlePage } from './getNextArticlePage';
import { getArticlesList } from '../getArticlesList/getArticlesList';

jest.mock('../getArticlesList/getArticlesList');

describe('getNextArticlePage', () => {
  test('getArticlesList not called', async () => {
    const thunk = new TestAsyncThunk(getNextArticlePage, {
      articlesPage: {
        entities: {},
        ids: [],
        hasPage: false,
        isLoading: false,
        page: 2,
        limit: 5,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(getArticlesList).not.toHaveBeenCalled();
  });

  test('success', async () => {
    const thunk = new TestAsyncThunk(getNextArticlePage, {
      articlesPage: {
        entities: {},
        ids: [],
        hasPage: true,
        isLoading: false,
        page: 2,
        limit: 5,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(getArticlesList).toHaveBeenCalledWith({ page: 3 });
  });
});
