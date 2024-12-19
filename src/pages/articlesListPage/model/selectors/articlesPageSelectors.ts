import { StateModel } from 'app/providers/StoreProvider';
import { ArticleListView } from 'entities/Article';

export const getArticlesPageIsLoading = (state: StateModel) => state.articlesPage?.isLoading;
export const getArticlesPageError = (state: StateModel) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateModel) => state.articlesPage?.view || ArticleListView.LIST;
export const getArticlesPageHasPage = (state: StateModel) => state.articlesPage?.hasPage;
export const getArticlesPageNumber = (state: StateModel) => state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateModel) => state.articlesPage?.limit || 9;
