import { StateModel } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('should return profile error state', () => {
    const state: DeepPartial<StateModel> = {
      profile: {
        error: 'error',
      },
    };
    expect(getProfileError(state as StateModel)).toEqual('error');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getProfileError(state as StateModel)).toEqual(undefined);
  });
});
