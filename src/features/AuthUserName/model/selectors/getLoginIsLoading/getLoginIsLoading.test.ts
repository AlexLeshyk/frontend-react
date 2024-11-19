import { StateModel } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
  test('should return login isLoading state', () => {
    const state: DeepPartial<StateModel> = {
      loginForm: { isLoading: true },
    };
    expect(getLoginIsLoading(state as StateModel)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getLoginIsLoading(state as StateModel)).toEqual(false);
  });
});
