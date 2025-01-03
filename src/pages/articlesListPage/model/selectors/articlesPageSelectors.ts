import { StateModel } from 'app/providers/StoreProvider';
import { ArticleListView, ArticleSortField } from 'entities/Article';

export const getArticlesPageIsLoading = (state: StateModel) => state.articlesPage?.isLoading;
export const getArticlesPageError = (state: StateModel) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateModel) => state.articlesPage?.view || ArticleListView.LIST;
export const getArticlesPageHasPage = (state: StateModel) => state.articlesPage?.hasPage;
export const getArticlesPageNumber = (state: StateModel) => state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateModel) => state.articlesPage?.limit || 9;
export const getArticlesPageInited = (state: StateModel) => state.articlesPage?.inited;
export const getArticlesPageSort = (state: StateModel) => state.articlesPage?.sort || ArticleSortField.CREATED;
export const getArticlesPageOrder = (state: StateModel) => state.articlesPage?.order || 'asc';
export const getArticlesPageSearch = (state: StateModel) => state.articlesPage?.search || '';
