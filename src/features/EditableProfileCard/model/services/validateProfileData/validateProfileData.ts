import { Profile } from 'entities/Profile';
import { ValidateProfileError } from '../../types/EditableProfileCardModel';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const errors: Array<ValidateProfileError> = [];

  const {
    first, lastname, city, currency, age,
  } = profile;

  if (!first || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!city) {
    errors.push(ValidateProfileError.INCORRECT_CITY);
  }

  return errors;
};
