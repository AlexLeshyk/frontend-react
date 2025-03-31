import { StateModel } from '@/app/providers/StoreProvider';

export const getArticleData = (state: StateModel) => state.article?.data;
export const getArticleForm = (state: StateModel) => state.article?.form;
export const getArticleIsLoading = (state: StateModel) => state.article?.isLoading;
export const getArticleError = (state: StateModel) => state.article?.error;
