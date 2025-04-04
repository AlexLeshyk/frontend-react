import { StateModel } from '@/app/providers/StoreProvider';

export const getArticleData = (state: StateModel) => state.article?.data;
export const getArticleForm = (state: StateModel) => state.article?.form;
export const getArticleIsLoading = (state: StateModel) => state.article?.isLoading;
export const getArticleError = (state: StateModel) => state.article?.error;
export const getArticleReadonly = (state: StateModel) => state.article?.readonly;
export const getArticleValidateErrors = (state: StateModel) => state.article?.validateErrors;
