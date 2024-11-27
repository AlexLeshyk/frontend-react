import { StateModel } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
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

  test('should work with empty state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getProfileForm(state as StateModel)).toEqual(undefined);
  });
});
