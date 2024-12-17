import { StateModel } from 'app/providers/StoreProvider';
import { ArticleListView } from 'entities/Article';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from './articlesPageSelectors';

describe('articlesPageSelectors', () => {
  test('should return articlesPage error state', () => {
    const state: DeepPartial<StateModel> = {
      articlesPage: { error: 'error' },
    };
    expect(getArticlesPageError(state as StateModel)).toEqual('error');
  });

  test('should work with empty articlesPage error state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getArticlesPageError(state as StateModel)).toEqual(undefined);
  });

  test('should return articlesPage isLoading state', () => {
    const state: DeepPartial<StateModel> = {
      articlesPage: { isLoading: true },
    };
    expect(getArticlesPageIsLoading(state as StateModel)).toEqual(true);
  });

  test('should work with empty articlesPage isLoading state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getArticlesPageIsLoading(state as StateModel)).toEqual(undefined);
  });

  test('should return articlesPage view list state', () => {
    const state: DeepPartial<StateModel> = {
      articlesPage: { view: ArticleListView.LIST },
    };
    expect(getArticlesPageView(state as StateModel)).toEqual('list');
  });

  test('should return articlesPage view tile state', () => {
    const state: DeepPartial<StateModel> = {
      articlesPage: { view: ArticleListView.TILE },
    };
    expect(getArticlesPageView(state as StateModel)).toEqual('tile');
  });
});
