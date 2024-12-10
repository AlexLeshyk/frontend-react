import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator';
import { ArticleListView, ArticleType } from '../../model/types/article';
import { ArticleListItem } from './ArticleListItem';

export default {
  title: 'entities/ArticleListItem',
  component: ArticleListItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleListItem>;

type Story = StoryObj<typeof ArticleListItem>;

export const Primary: Story = {
  args: {
    article: {
      id: '1',
      title: 'Javascript news ЕР',
      subtitle: 'Что нового в JS за 2022 год?',
      img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
      views: 1021,
      createdAt: '26.04.2024',
      userId: '1',
      type: [ArticleType.IT, ArticleType.ECONOMICS],
      blocks: [],
    },
    view: ArticleListView.TILE,

  },
};
