import { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { SwitcherTheme } from './SwitcherTheme';

export default {
  title: 'widget/SwitcherTheme',
  component: SwitcherTheme,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof SwitcherTheme>;

type Story = StoryObj<typeof SwitcherTheme>;

export const Light: Story = {};
Light.args = {};

export const Dark: Story = {};
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
