import { StateModel } from 'app/providers/StoreProvider/config/StateModel';

export const getUserAuthData = (state: StateModel) => state?.user.authData;
