import { DeepPartial } from '@reduxjs/toolkit';
import { StateModel } from 'app/providers/StoreProvider/config/StateModel';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateModel> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as StateModel)).toEqual(10);
  });
});
