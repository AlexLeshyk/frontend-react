import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { ArticleSortField } from 'entities/Article';
import { ArticleSortSelector } from './ArticleSortSelector';

export default {
  title: 'features/Article/ArticleSortSelector',
  component: ArticleSortSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleSortSelector>;

type Story = StoryObj<typeof ArticleSortSelector>;

export const Primary: Story = {
  args: {
    sort: ArticleSortField.CREATED,
    order: 'desc',
  },
};

export const Dark: Story = {
  args: {
    sort: ArticleSortField.VIEWS,
    order: 'desc',
  },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
