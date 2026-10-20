import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import ProfileRating from './ProfileRating';

export default {
  title: 'features/ProfileRating',
  component: ProfileRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ProfileRating>;

type Story = StoryObj<typeof ProfileRating>;

export const Light: Story = {};
Light.args = {};
