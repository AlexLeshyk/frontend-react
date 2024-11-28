import { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { Button } from './Button';
import { ButtonSize, ButtonTheme } from './Button.model';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    theme: ButtonTheme.PRIMARY,
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'Primary',
    theme: ButtonTheme.PRIMARY,
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear: Story = {
  args: {
    children: 'Clear',
    theme: ButtonTheme.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Light',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.SMALL,
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Outline Dark',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.SMALL,
  },
};

export const OutlineSizeM: Story = {
  args: {
    children: 'Outline Light',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.MEDIUM,
  },
};

export const OutlineSizeL: Story = {
  args: {
    children: 'Outline Light',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.LARGE,
  },
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background: Story = {
  args: {
    children: 'Background',
    theme: ButtonTheme.BACKGROUND,
  },
};

export const BackgroundInverted: Story = {
  args: {
    children: 'Background Inverted',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const Square: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.SMALL,
  },
};

export const SquareSizeM: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.MEDIUM,
  },
};

export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.LARGE,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
  },
};
