import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { RatingCard } from './RatingCard';

export default {
  title: 'entities/RatingCard',
  component: RatingCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof RatingCard>;

type Story = StoryObj<typeof RatingCard>;

export const Light: Story = {};
Light.args = {};
