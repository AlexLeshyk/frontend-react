import { StateModel } from '@/app/providers/StoreProvider';

export const getProfileData = (state: StateModel) => state.profile?.data;
export const getProfileError = (state: StateModel) => state.profile?.error;
export const getProfileIsLoading = (state: StateModel) => state.profile?.isLoading;
export const getProfileForm = (state: StateModel) => state.profile?.form;
export const getProfileReadOnly = (state: StateModel) => state.profile?.readonly;
export const getProfileValidateErrors = (state: StateModel) => state.profile?.validateErrors;
