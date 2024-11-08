import { CounterModel } from 'entities/Counter';
import { UserModel } from 'entities/User';

export interface StateModel {
  counter: CounterModel,
  user: UserModel
}
