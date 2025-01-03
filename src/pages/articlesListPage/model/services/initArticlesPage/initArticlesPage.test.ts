import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { getArticlesList } from '../getArticlesList/getArticlesList';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../getArticlesList/getArticlesList');

describe('initArticlesPage', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        entities: {},
        ids: [],
        hasPage: true,
        isLoading: false,
        page: 1,
        limit: 5,
        inited: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(getArticlesList).toHaveBeenCalled();
    expect(getArticlesList).toHaveBeenCalledWith({});
  });

  test('getArticlesList not called', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        entities: {},
        ids: [],
        hasPage: true,
        isLoading: false,
        page: 1,
        limit: 5,
        inited: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(getArticlesList).not.toHaveBeenCalled();
  });
});
