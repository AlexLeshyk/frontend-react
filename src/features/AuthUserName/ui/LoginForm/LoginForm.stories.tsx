import { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storyBook/StoreDecorator';
import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof LoginForm>;

type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {};
Primary.args = {};

Primary.decorators = [
  StoreDecorator({
    loginForm: {
      userName: 'user',
      password: '123',
    },
  }),
];

export const withError: Story = {};
withError.args = {};

withError.decorators = [
  StoreDecorator({
    loginForm: {
      userName: 'user',
      password: '123',
      error: 'ERROR',
    },
  }),
];

export const Loading: Story = {};
Loading.args = {};

Loading.decorators = [
  StoreDecorator({
    loginForm: { isLoading: true },
  }),
];
