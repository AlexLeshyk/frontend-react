import { StoryObj, Meta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import ArticlePage from './ArticlePage';

export default {
  title: 'pages/ArticlePage',
  component: ArticlePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticlePage>;

type Story = StoryObj<typeof ArticlePage>;

export const Light: Story = {};
Light.args = {};

export const Dark: Story = {};
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
