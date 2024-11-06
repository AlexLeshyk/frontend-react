import { DeepPartial } from '@reduxjs/toolkit';
import { StateModel } from 'app/providers/StoreProvider/config/StateModel';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('should return counter state', () => {
    const state: DeepPartial<StateModel> = {
      counter: { value: 10 },
    };
    expect(getCounter(state as StateModel)).toEqual({ value: 10 });
  });
});