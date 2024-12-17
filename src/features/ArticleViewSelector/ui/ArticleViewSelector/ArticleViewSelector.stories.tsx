import { Meta, StoryObj } from '@storybook/react';
import { ArticleListView } from 'entities/Article';
import { ArticleViewSelector } from './ArticleViewSelector';

export default {
  title: 'features/ArticleViewSelector',
  component: ArticleViewSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleViewSelector>;

type Story = StoryObj<typeof ArticleViewSelector>;

export const Primary: Story = {
  args: {
    view: ArticleListView.TILE,
  },
};
