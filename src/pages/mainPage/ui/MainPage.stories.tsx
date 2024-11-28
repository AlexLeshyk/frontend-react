import { StoryObj, Meta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
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

export const Dark: Story = {};
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
