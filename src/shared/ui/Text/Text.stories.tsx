import { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { Text } from './Text';
import { TextTheme } from './Text.model';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Text>;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {};
Primary.args = {
  title: 'Primary title',
  text: 'A lot of some text',
};

export const OnlyText: Story = {};
OnlyText.args = {
  text: 'Only a lot of some text',
};

export const OnlyTitle: Story = {};
OnlyTitle.args = {
  title: 'Only title',
};

export const Error: Story = {};
Error.args = {
  title: 'Error title',
  text: 'A lot of some text',
  theme: TextTheme.ERROR,
};

export const PrimaryDark: Story = {};
PrimaryDark.args = {
  title: 'Title dark',
  text: 'A lot of some text',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark: Story = {};
OnlyTextDark.args = {
  text: 'Only a lot of dark text',
};

OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark: Story = {};
OnlyTitleDark.args = {
  title: 'Only title dark',
};

OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
