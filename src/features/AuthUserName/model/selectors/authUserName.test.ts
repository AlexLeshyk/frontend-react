import { StateModel } from '@/app/providers/StoreProvider';
import {
  getLoginError, getLoginIsLoading, getLoginPassword, getLoginUserName,
} from './authUserName';

describe('authUserName', () => {
  test('should return login error state', () => {
    const state: DeepPartial<StateModel> = {
      loginForm: { error: 'error' },
    };
    expect(getLoginError(state as StateModel)).toEqual('error');
  });

  test('should work with empty state login error', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getLoginError(state as StateModel)).toEqual(undefined);
  });

  test('should return login isLoading state', () => {
    const state: DeepPartial<StateModel> = {
      loginForm: { isLoading: true },
    };
    expect(getLoginIsLoading(state as StateModel)).toEqual(true);
  });

  test('should work with empty state login isLoading', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getLoginIsLoading(state as StateModel)).toEqual(false);
  });

  test('should return login password state', () => {
    const state: DeepPartial<StateModel> = {
      loginForm: { password: '123' },
    };
    expect(getLoginPassword(state as StateModel)).toEqual('123');
  });

  test('should work with empty state login password', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getLoginPassword(state as StateModel)).toEqual('');
  });

  test('should return login username state', () => {
    const state: DeepPartial<StateModel> = {
      loginForm: { userName: 'userName' },
    };
    expect(getLoginUserName(state as StateModel)).toEqual('userName');
  });

  test('should work with empty state login username', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getLoginUserName(state as StateModel)).toEqual('');
  });
});
