import { StateModel } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('should return counter state', () => {
    const state: DeepPartial<StateModel> = {
      counter: { value: 10 },
    };
    expect(getCounter(state as StateModel)).toEqual({ value: 10 });
  });
});
