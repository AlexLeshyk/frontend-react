import { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { LinkComponent } from './LinkComponent';
import { LinkTheme } from './LinkComponent.model';

export default {
  title: 'shared/LinkComponent',
  component: LinkComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as Meta<typeof LinkComponent>;

type Story = StoryObj<typeof LinkComponent>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    theme: LinkTheme.PRIMARY,
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'Primary Dark',
    theme: LinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    theme: LinkTheme.SECONDARY,
  },
};

export const SecondaryDark: Story = {
  args: {
    children: 'Secondary Dark',
    theme: LinkTheme.SECONDARY,
  },
};

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
