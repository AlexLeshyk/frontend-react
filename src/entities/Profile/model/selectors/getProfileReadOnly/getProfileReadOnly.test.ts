import { StateModel } from 'app/providers/StoreProvider';
import { getProfileReadOnly } from './getProfileReadOnly';

describe('getProfileReadOnly', () => {
  test('should return profile readonly state', () => {
    const state: DeepPartial<StateModel> = {
      profile: {
        readonly: false,
      },
    };
    expect(getProfileReadOnly(state as StateModel)).toEqual(false);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getProfileReadOnly(state as StateModel)).toEqual(undefined);
  });
});
