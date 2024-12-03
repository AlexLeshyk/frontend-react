import { StateModel } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateModel) => state.articleComments?.isLoading;
export const getrticleCommentsError = (state: StateModel) => state.articleComments?.error;
