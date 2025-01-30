import { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticlesPageFilters } from './ArticlesPageFilters';

export default {
  title: 'pages/ArticleList/Filters',
  component: ArticlesPageFilters,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticlesPageFilters>;

type Story = StoryObj<typeof ArticlesPageFilters>;

export const Primary: Story = {};
Primary.args = {};

Primary.decorators = [StoreDecorator({
})];

export const Dark: Story = {};
Primary.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
})];
