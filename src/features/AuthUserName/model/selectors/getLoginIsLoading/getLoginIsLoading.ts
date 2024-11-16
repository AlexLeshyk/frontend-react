import { StateModel } from 'app/providers/StoreProvider';

export const getLoginIsLoading = (state: StateModel) => state?.loginForm?.isLoading || false;
