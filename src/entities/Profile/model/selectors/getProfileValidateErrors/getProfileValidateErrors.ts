import { StateModel } from 'app/providers/StoreProvider';

export const getProfileValidateErrors = (state: StateModel) => state.profile?.validateErrors;
