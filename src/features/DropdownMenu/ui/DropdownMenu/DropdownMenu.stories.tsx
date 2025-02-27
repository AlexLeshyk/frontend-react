import { StoryObj, Meta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator';
import { UserRole } from 'entities/User';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { DropdownMenu } from './DropdownMenu';

export default {
  title: 'features/DropdownMenu',
  component: DropdownMenu,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof DropdownMenu>;

type Story = StoryObj<typeof DropdownMenu>;

export const Light: Story = {};
Light.args = {
  className: 'here',
};

const data = {
  id: '1',
  username: 'gashy',
  avatar: 'https://avatarzo.ru/wp-content/uploads/oduvanchik-na-solncze.jpg',
  roles: [UserRole.ADMIN],
};

Light.decorators = [StoreDecorator({
  user: { authData: data },
})];

export const Dark: Story = {};
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: { authData: data },
})];
