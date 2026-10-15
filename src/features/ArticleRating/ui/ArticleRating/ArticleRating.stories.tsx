import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import ArticleRating from './ArticleRating';

export default {
  title: 'features/ArticleRating',
  component: ArticleRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleRating>;

type Story = StoryObj<typeof ArticleRating>;

export const Light: Story = {};
Light.args = {};
