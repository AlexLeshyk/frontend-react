import { StateModel } from 'app/providers/StoreProvider';
import { getLoginUserName } from './getLoginUserName';

describe('getLoginUserName', () => {
  test('should return login password state', () => {
    const state: DeepPartial<StateModel> = {
      loginForm: { userName: 'userName' },
    };
    expect(getLoginUserName(state as StateModel)).toEqual('userName');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getLoginUserName(state as StateModel)).toEqual('');
  });
});
