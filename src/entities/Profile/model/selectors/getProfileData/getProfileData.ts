import { StateModel } from 'app/providers/StoreProvider';

export const getProfileData = (state: StateModel) => state.profile?.data;
