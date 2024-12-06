import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ProfilePage>;

type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {};
Light.args = {};

Light.decorators = [
  StoreDecorator({
    profile: {
      form: {
        id: '1',
        first: 'Александр',
        lastname: 'Лешик',
        age: 5,
        currency: Currency.USD,
        country: Country.Belarus,
        city: 'Копище',
        username: 'admin',
        avatar:
          'https://avatarzo.ru/wp-content/uploads/oduvanchik-na-solncze.jpg',
      },
    },
  }),
];

export const Dark: Story = {};
Dark.args = {};

Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        first: 'Александр',
        lastname: 'Лешик',
        age: 5,
        currency: Currency.USD,
        country: Country.Belarus,
        city: 'Копище',
        username: 'admin',
        avatar:
          'https://avatarzo.ru/wp-content/uploads/oduvanchik-na-solncze.jpg',
      },
    },
  }),
];
