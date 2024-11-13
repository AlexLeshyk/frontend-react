import { CounterModel } from 'entities/Counter';
import { UserModel } from 'entities/User';
import { LoginModel } from 'features/AuthUserName/model/types/loginModel';

export interface StateModel {
  counter: CounterModel,
  user: UserModel,
  loginForm: LoginModel
}
