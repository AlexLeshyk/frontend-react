import { StoryObj, Meta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator';
import MainPage from './MainPage';

export default {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof MainPage>;

type Story = StoryObj<typeof MainPage>;

export const Light: Story = {};
Light.args = {};

Light.decorators = [StoreDecorator({})];

export const Dark: Story = {};
Dark.args = {};

Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
