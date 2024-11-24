import { StateModel } from 'app/providers/StoreProvider';

export const getProfileForm = (state: StateModel) => state.profile?.form;
