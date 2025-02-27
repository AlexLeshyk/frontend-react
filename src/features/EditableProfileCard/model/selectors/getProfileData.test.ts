import { StateModel } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import {
  getProfileData, getProfileError, getProfileForm, getProfileIsLoading,
  getProfileReadOnly, getProfileValidateErrors,
} from './getProfileData';
import { ValidateProfileError } from '../consts/consts';

describe('getProfileData', () => {
  test('should return profile data state', () => {
    const data = {
      first: 'Александр',
      lastname: 'Лешик',
      age: 5,
      currency: Currency.USD,
      country: Country.Belarus,
      city: 'Копище',
      username: 'admin',
      avatar: 'https://avatarzo.ru/wp-content/uploads/oduvanchik-na-solncze.jpg',
    };
    const state: DeepPartial<StateModel> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateModel)).toEqual(data);
  });

  test('should work with empty profile data state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getProfileData(state as StateModel)).toEqual(undefined);
  });

  test('should return profile error state', () => {
    const state: DeepPartial<StateModel> = {
      profile: {
        error: 'error',
      },
    };
    expect(getProfileError(state as StateModel)).toEqual('error');
  });

  test('should work with empty error state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getProfileError(state as StateModel)).toEqual(undefined);
  });

  test('should return profile isLoading state', () => {
    const state: DeepPartial<StateModel> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileIsLoading(state as StateModel)).toEqual(true);
  });

  test('should work with empty isLoading state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getProfileIsLoading(state as StateModel)).toEqual(undefined);
  });

  test('should return profile form state', () => {
    const formData = {
      first: 'Александр',
      lastname: 'Лешик',
      age: 5,
      currency: Currency.USD,
      country: Country.Belarus,
      city: 'Копище',
      username: 'admin',
      avatar: 'https://avatarzo.ru/wp-content/uploads/oduvanchik-na-solncze.jpg',
    };
    const state: DeepPartial<StateModel> = {
      profile: {
        form: formData,
      },
    };
    expect(getProfileForm(state as StateModel)).toEqual(formData);
  });

  test('should work with empty form state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getProfileForm(state as StateModel)).toEqual(undefined);
  });

  test('should return profile readonly state', () => {
    const state: DeepPartial<StateModel> = {
      profile: {
        readonly: false,
      },
    };
    expect(getProfileReadOnly(state as StateModel)).toEqual(false);
  });

  test('should work with empty readonly state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getProfileReadOnly(state as StateModel)).toEqual(undefined);
  });

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
