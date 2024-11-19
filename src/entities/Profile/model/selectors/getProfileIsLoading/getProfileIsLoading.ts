import { StateModel } from 'app/providers/StoreProvider';

export const getProfileIsLoading = (state: StateModel) => state.profile?.isLoading;
