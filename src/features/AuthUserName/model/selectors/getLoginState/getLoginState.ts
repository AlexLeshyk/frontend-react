import { StateModel } from 'app/providers/StoreProvider/config/StateModel';

export const getLoginState = (state: StateModel) => state?.loginForm;
