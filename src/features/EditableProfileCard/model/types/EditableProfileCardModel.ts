import { Profile } from 'entities/Profile';

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'incorrect_user_data',
  INCORRECT_AGE = 'incorrect_age',
  INCORRECT_CITY = 'incorrect_city',
  NO_DATA = 'not_data',
  SERVER_ERROR = 'server error',
}

export interface ProfileModel {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: Array<ValidateProfileError>;
}
