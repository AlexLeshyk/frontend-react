import { StateModel } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/profileType';

describe('getProfileValidateErrors', () => {
  test('should return profile validateErrors state', () => {
    const validateErrors = [
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_CITY,
    ];
    const state: DeepPartial<StateModel> = {
      profile: {
        validateErrors,
      },
    };
    expect(getProfileValidateErrors(state as StateModel)).toEqual(validateErrors);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getProfileValidateErrors(state as StateModel)).toEqual(undefined);
  });
});
