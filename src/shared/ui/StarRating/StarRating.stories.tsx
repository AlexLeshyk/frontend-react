import { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { StarRating } from './StarRating';

export default {
  title: 'shared/StarRating',
  component: StarRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof StarRating>;

type Story = StoryObj<typeof StarRating>;

export const Light: Story = {};
Light.args = {};

export const Dark: Story = {};
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
