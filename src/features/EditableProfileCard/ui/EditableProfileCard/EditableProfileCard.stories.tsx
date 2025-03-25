import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storyBook/StoreDecorator';
import { UserRole } from '@/entities/User';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { EditableProfileCard } from './EditableProfileCard';

export default {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof EditableProfileCard>;

type Story = StoryObj<typeof EditableProfileCard>;

export const Primary: Story = {};
Primary.args = {};

Primary.args = {
  id: '1',
};

Primary.decorators = [StoreDecorator({
  profile: {
    isLoading: false,
    data: {
      id: '1',
      first: 'yes',
      lastname: 'no',
      age: 34,
      currency: Currency.USD,
      country: Country.Belarus,
      city: 'Minsk',
      username: 'gashy',
      avatar: 'https://avatarzo.ru/wp-content/uploads/oduvanchik-na-solncze.jpg',
    },
    form: {
      id: '1',
      first: 'yes',
      lastname: 'no',
      age: 34,
      currency: Currency.USD,
      country: Country.Belarus,
      city: 'Minsk',
      username: 'gashy',
      avatar: 'https://avatarzo.ru/wp-content/uploads/oduvanchik-na-solncze.jpg',
    },
    readonly: false,
  },
  user: {
    authData: {
      id: '1',
      username: 'gashy',
      avatar: 'https://avatarzo.ru/wp-content/uploads/oduvanchik-na-solncze.jpg',
      roles: [UserRole.ADMIN],
    },
  },
})];
