import { Meta, StoryObj } from '@storybook/react';
import { ArticleList } from './ArticleList';
import { ArticleListView, ArticleType } from '../../model/types/article';

export default {
  title: 'entities/ArticleList',
  component: ArticleList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleList>;

type Story = StoryObj<typeof ArticleList>;

export const Primary: Story = {
  args: {
    articles: [
      {
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
    ],
    view: ArticleListView.TILE,
  },
};
