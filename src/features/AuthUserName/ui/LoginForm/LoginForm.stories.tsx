import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

Primary.decorators = [StoreDecorator({
  loginForm: {
    userName: 'user', password: '123',
  },
})];

export const withError = Template.bind({});
withError.args = {};

withError.decorators = [StoreDecorator({
  loginForm: {
    userName: 'user', password: '123', error: 'ERROR',
  },
})];

export const Loading = Template.bind({});
Loading.args = {};

Loading.decorators = [StoreDecorator({
  loginForm: { isLoading: true },
})];
