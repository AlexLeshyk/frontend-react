import { StateModel } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateModel> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as StateModel)).toEqual(10);
  });
});
