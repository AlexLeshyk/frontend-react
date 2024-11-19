import { StateModel } from 'app/providers/StoreProvider';

export const getProfileError = (state: StateModel) => state.profile?.error;
