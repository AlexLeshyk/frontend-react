import { StateModel } from 'app/providers/StoreProvider';

export const getLoginUserName = (state: StateModel) => state?.loginForm?.userName || '';
