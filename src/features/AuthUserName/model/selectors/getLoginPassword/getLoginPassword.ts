import { StateModel } from 'app/providers/StoreProvider';

export const getLoginPassword = (state: StateModel) => state?.loginForm?.password || '';
