import { counterActions, counterReducer } from './counterSlice';
import { CounterModel } from '../types/CounterModel';

describe('counterSlice', () => {
  test('should return increment value', () => {
    const state: CounterModel = { value: 10 };
    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
  });

  test('should return decrement value', () => {
    const state: CounterModel = { value: 10 };
    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
  });

  test('should work with empty space', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 6 });
  });
});
