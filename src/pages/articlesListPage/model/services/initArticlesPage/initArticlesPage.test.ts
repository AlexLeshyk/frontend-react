import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { ArticleSortField } from 'entities/Article';
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
        order: 'asc',
        search: 'typescript',
        sort: ArticleSortField.CREATED,
      },
    });

    await thunk.callThunk({} as URLSearchParams);

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(getArticlesList).not.toHaveBeenCalled();
    // expect(getArticlesList).toHaveBeenCalledWith({});
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
        order: 'asc',
        search: 'typescript',
        sort: ArticleSortField.CREATED,
      },
    });

    await thunk.callThunk({} as URLSearchParams);

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(getArticlesList).not.toHaveBeenCalled();
  });
});
