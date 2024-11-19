import { StateModel } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  test('should return login password state', () => {
    const state: DeepPartial<StateModel> = {
      loginForm: { password: '123' },
    };
    expect(getLoginPassword(state as StateModel)).toEqual('123');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getLoginPassword(state as StateModel)).toEqual('');
  });
});
