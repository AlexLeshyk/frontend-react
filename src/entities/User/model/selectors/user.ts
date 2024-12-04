import { StateModel } from 'app/providers/StoreProvider';

export const getUserAuthData = (state: StateModel) => state?.user.authData;
export const getUserMounted = (state: StateModel) => state?.user.mounted;
