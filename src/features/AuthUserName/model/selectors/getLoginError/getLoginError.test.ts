import { DeepPartial } from '@reduxjs/toolkit';
import { StateModel } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
  test('should return login error state', () => {
    const state: DeepPartial<StateModel> = {
      loginForm: {
        error: 'error',
      },
    };
    expect(getLoginError(state as StateModel)).toEqual('error');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getLoginError(state as StateModel)).toEqual(undefined);
  });
});
