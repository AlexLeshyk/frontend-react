import { Meta, StoryObj } from '@storybook/react';
import { ArticleListView } from 'entities/Article';
import { ArticleViewSelector } from './ArticleViewSelector';

export default {
  title: 'features/Article/ArticleViewSelector',
  component: ArticleViewSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleViewSelector>;

type Story = StoryObj<typeof ArticleViewSelector>;

export const TileSelected: Story = {
  args: {
    view: ArticleListView.TILE,
  },
};

export const ListSelected: Story = {
  args: {
    view: ArticleListView.LIST,
  },
};
