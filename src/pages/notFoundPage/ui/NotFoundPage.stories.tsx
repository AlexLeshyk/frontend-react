import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { NotFoundPage } from './NotFoundPage';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof NotFoundPage>;

type Story = StoryObj<typeof NotFoundPage>;

export const Light: Story = {};
Light.args = {};

Light.decorators = [StoreDecorator({})];

export const Dark: Story = {};
Dark.args = {};

Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
