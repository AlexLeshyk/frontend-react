import { StateModel } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateModel) => state.articleDetailsPage?.comments?.isLoading;
export const getArticleCommentsError = (state: StateModel) => state.articleDetailsPage?.comments?.error;
