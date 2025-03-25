import { StateModel } from '@/app/providers/StoreProvider';

export const getLoginError = (state: StateModel) => state?.loginForm?.error;
export const getLoginPassword = (state: StateModel) => state?.loginForm?.password || '';
export const getLoginIsLoading = (state: StateModel) => state?.loginForm?.isLoading || false;
export const getLoginUserName = (state: StateModel) => state?.loginForm?.userName || '';
