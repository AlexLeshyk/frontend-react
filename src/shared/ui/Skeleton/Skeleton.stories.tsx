import { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Skeleton>;
type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = {
  args: {
    width: '100%',
    height: 100,
  },
};

export const Circle: Story = {
  args: {
    width: 100,
    height: 100,
    border: '50%',
  },
};

export const PrimaryDark: Story = {
  args: {
    width: '100%',
    height: 100,
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark: Story = {
  args: {
    width: 100,
    height: 100,
    border: '50%',
  },
};

CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
