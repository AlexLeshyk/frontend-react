import { StateModel } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
  test('should return profile isLoading state', () => {
    const state: DeepPartial<StateModel> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileIsLoading(state as StateModel)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getProfileIsLoading(state as StateModel)).toEqual(undefined);
  });
});
