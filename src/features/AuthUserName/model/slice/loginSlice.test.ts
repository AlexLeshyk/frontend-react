import { loginActions, loginReducer } from './loginSlice';
import { LoginModel } from '../types/loginModel';

describe('loginSlice', () => {
  test('test setUsername', () => {
    const state: DeepPartial<LoginModel> = { userName: 'admin', password: '123' };
    expect(loginReducer(state as LoginModel, loginActions.setUsername('1234'))).toEqual({ userName: '1234', password: '123' });
  });

  test('test setPassword', () => {
    const state: DeepPartial<LoginModel> = { userName: 'admin', password: '123' };
    expect(loginReducer(state as LoginModel, loginActions.setPassword('12'))).toEqual({ password: '12', userName: 'admin' });
  });
});
