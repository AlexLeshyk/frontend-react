import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { profileReducer, profileActions } from './profileSlice';
import { ProfileModel, ValidateProfileError } from '../types/EditableProfileCardModel';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

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

describe('profileSlice', () => {
  test('test setReadOnly', () => {
    const state: DeepPartial<ProfileModel> = { readonly: false };
    expect(profileReducer(state as ProfileModel, profileActions.setReadOnly(true))).toEqual({ readonly: true });
  });

  test('test updateProfile', () => {
    const state: DeepPartial<ProfileModel> = { form: { username: 'Alex' } };
    expect(profileReducer(
      state as ProfileModel,
      profileActions.updateProfile({ username: 'Aliaksandr' }),
    )).toEqual({ form: { username: 'Aliaksandr' } });
  });

  test('test updateProfile pending state', () => {
    const state: DeepPartial<ProfileModel> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(profileReducer(
      state as ProfileModel,
      updateProfileData.pending,
    )).toEqual({ isLoading: true, validateErrors: undefined });
  });

  test('test updateProfile fulfilled state', () => {
    const state: DeepPartial<ProfileModel> = {
      isLoading: true,
    };
    expect(profileReducer(
      state as ProfileModel,
      updateProfileData.fulfilled(data, ''),
    )).toEqual({
      isLoading: false, validateErrors: undefined, form: data, data, readonly: true,
    });
  });
});
