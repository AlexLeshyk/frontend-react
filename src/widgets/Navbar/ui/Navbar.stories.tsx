import { StoryObj, Meta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { Navbar } from './Navbar';

export default {
  title: 'widget/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Navbar>;

type Story = StoryObj<typeof Navbar>;

export const Light: Story = {};
Light.args = {};

Light.decorators = [StoreDecorator({})];

export const Dark: Story = {};
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const AuthNavbar: Story = {};
AuthNavbar.args = {};

AuthNavbar.decorators = [StoreDecorator({ user: { authData: {} } })];
