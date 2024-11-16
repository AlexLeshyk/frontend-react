import { StateModel } from 'app/providers/StoreProvider';

export const getLoginError = (state: StateModel) => state?.loginForm?.error;
