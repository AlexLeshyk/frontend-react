import { StateModel } from 'app/providers/StoreProvider';

export const getUserMounted = (state: StateModel) => state?.user.mounted;
