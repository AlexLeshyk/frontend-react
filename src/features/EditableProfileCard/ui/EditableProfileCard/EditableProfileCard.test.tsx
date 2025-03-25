import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Profile } from '@/entities/Profile';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { EditableProfileCard } from './EditableProfileCard';
import { profileReducer } from '../../model/slice/profileSlice';

const profile: Profile = {
  id: '1',
  first: 'admin',
  lastname: 'admin',
  age: 45,
  currency: Currency.USD,
  country: Country.Belarus,
  city: 'Minsk',
  username: 'admin213',
};

const options = {
  initalState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: { id: '1', username: 'admin213' },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('EditableProfileCard', () => {
  test('readonly mode should appear', async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.ButtonEdit'));
    expect(screen.getByTestId('EditableProfileCardHeader.ButtonCancel')).toBeInTheDocument();
  });
});
