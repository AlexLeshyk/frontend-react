import { StoryObj, Meta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import ArticlesListPage from './ArticlesListPage';

export default {
  title: 'pages/ArticlesListPage',
  component: ArticlesListPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticlesListPage>;

type Story = StoryObj<typeof ArticlesListPage>;

export const Light: Story = {};
Light.args = {};

export const Dark: Story = {};
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
