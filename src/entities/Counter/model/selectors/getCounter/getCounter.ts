import { StateModel } from 'app/providers/StoreProvider';

export const getCounter = (state: StateModel) => state.counter;
