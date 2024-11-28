import { StateModel } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileData } from './getProfileData';

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

  test('should work with empty state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getProfileData(state as StateModel)).toEqual(undefined);
  });
});
