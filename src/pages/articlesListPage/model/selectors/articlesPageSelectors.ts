import { StateModel } from 'app/providers/StoreProvider';
import { ArticleListView } from 'entities/Article';

export const getArticlesPageIsLoading = (state: StateModel) => state.articlesPage?.isLoading;
export const getArticlesPageError = (state: StateModel) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateModel) => state.articlesPage?.view || ArticleListView.LIST;
