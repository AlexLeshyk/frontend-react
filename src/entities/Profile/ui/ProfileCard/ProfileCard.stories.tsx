import { Meta, StoryObj } from '@storybook/react';
import avatar from 'shared/images/tests/oduvanchik-na-solncze.jpg';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ProfileCard>;

type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {};
Primary.args = {
  data: {
    username: 'Alex',
    first: 'Aliaksandr',
    lastname: 'Leshik',
    age: 42,
    currency: Currency.EUR,
    country: Country.Belarus,
    city: 'Minsk',
    avatar,
  },
};

export const withError: Story = {};
withError.args = {
  error: 'true',
};

export const Loading: Story = {};
Loading.args = {
  isLoading: true,
};
