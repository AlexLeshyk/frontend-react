import { StateModel } from 'app/providers/StoreProvider';

export const getUserAuthData = (state: StateModel) => state?.user.authData;
