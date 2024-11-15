import { StateModel } from 'app/providers/StoreProvider';

export const getLoginState = (state: StateModel) => state?.loginForm;
