import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../consts/consts';

const data = {
  first: 'Александр',
  lastname: 'Лешик',
  age: 5,
  currency: Currency.USD,
  country: Country.Belarus,
  city: 'Копище',
  username: 'admin',
  avatar: 'https://avatarzo.ru/wp-content/uploads/oduvanchik-na-solncze.jpg',
  id: '1',
};
describe('validateProfileData', () => {
  test('success validation', () => {
    const result = validateProfileData(data);
    expect(result).toEqual([]);
  });

  test('without first name & lastname', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('without age or incorrect age', async () => {
    const result = validateProfileData({ ...data, age: undefined });
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('without city', async () => {
    const result = validateProfileData({ ...data, city: undefined });
    expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
  });

  test('incorrect all', async () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_CITY,
    ]);
  });
});
