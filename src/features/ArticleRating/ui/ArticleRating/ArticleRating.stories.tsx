import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storyBook/StoreDecorator';

export default {
  title: 'features/ArticleRating',
  component: ArticleRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleRating>;

type Story = StoryObj<typeof ArticleRating>;

export const Normal: Story = {};
Normal.args = {
  articleId: '1',
};

Normal.decorators = [StoreDecorator({
  user: {
    authData: {
      id: '1',
    },
  },
})];

Normal.parameters = {
  mockData: [
    {
      url: 'http://localhost:8000/article-ratings?articleId=1&userId=1',
      method: 'GET',
      status: 200,
      response: [
        {
          rate: 4,
        },
      ],
    },
  ],
};

export const WithNoRating: Story = {};
WithNoRating.args = {
  articleId: '1',
};

WithNoRating.decorators = [StoreDecorator({
  user: {
    authData: {
      id: '1',
    },
  },
})];

WithNoRating.parameters = {
  mockData: [
    {
      url: 'http://localhost:8000/article-ratings?articleId=1&userId=1',
      method: 'GET',
      status: 200,
      response: [],
    },
  ],
};
