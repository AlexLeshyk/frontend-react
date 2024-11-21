import { StateModel } from 'app/providers/StoreProvider';

export const getProfileReadOnly = (state: StateModel) => state.profile?.readonly;
