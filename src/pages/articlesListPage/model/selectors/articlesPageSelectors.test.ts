import { StateModel } from 'app/providers/StoreProvider';
import { ArticleListView, ArticleSortField, ArticleType } from 'entities/Article';
import {
  getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView, getArticlesPageHasPage, getArticlesPageNumber,
  getArticlesPageInited, getArticlesPageType, getArticlesPageSort, getArticlesPageOrder, getArticlesPageSearch,
} from './articlesPageSelectors';

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

  test('should return articlesPage hasPage state', () => {
    const state: DeepPartial<StateModel> = {
      articlesPage: { hasPage: true },
    };
    expect(getArticlesPageHasPage(state as StateModel)).toEqual(true);
  });

  test('should work with empty articlesPage hasPage state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getArticlesPageHasPage(state as StateModel)).toEqual(undefined);
  });

  test('should return articlesPage inited state', () => {
    const state: DeepPartial<StateModel> = {
      articlesPage: { inited: false },
    };
    expect(getArticlesPageInited(state as StateModel)).toEqual(false);
  });

  test('should work with empty articlesPage inited state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getArticlesPageInited(state as StateModel)).toEqual(undefined);
  });

  test('should return articlesPage page state', () => {
    const state: DeepPartial<StateModel> = {
      articlesPage: { page: 1 },
    };
    expect(getArticlesPageNumber(state as StateModel)).toEqual(1);
  });

  test('should work with empty articlesPage page state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getArticlesPageNumber(state as StateModel)).toEqual(1);
  });

  test('should return articlesPage type state', () => {
    const state: DeepPartial<StateModel> = {
      articlesPage: { type: ArticleType.IT },
    };
    expect(getArticlesPageType(state as StateModel)).toEqual('IT');
  });

  test('should work with empty articlesPage type state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getArticlesPageType(state as StateModel)).toEqual('ALL');
  });

  test('should return articlesPage sort state', () => {
    const state: DeepPartial<StateModel> = {
      articlesPage: { sort: ArticleSortField.TITLE },
    };
    expect(getArticlesPageSort(state as StateModel)).toEqual('title');
  });

  test('should work with empty articlesPage sort state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getArticlesPageSort(state as StateModel)).toEqual('createdAt');
  });

  test('should return articlesPage order state', () => {
    const state: DeepPartial<StateModel> = {
      articlesPage: { order: 'desc' },
    };
    expect(getArticlesPageOrder(state as StateModel)).toEqual('desc');
  });

  test('should work with empty articlesPage order state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getArticlesPageOrder(state as StateModel)).toEqual('asc');
  });

  test('should return articlesPage search state', () => {
    const state: DeepPartial<StateModel> = {
      articlesPage: { search: 'typescript' },
    };
    expect(getArticlesPageSearch(state as StateModel)).toEqual('typescript');
  });

  test('should work with empty articlesPage search state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getArticlesPageSearch(state as StateModel)).toEqual('');
  });
});
