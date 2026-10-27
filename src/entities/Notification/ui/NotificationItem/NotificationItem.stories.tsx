import { StoryObj, Meta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { NotificationItem } from './NotificationItem';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'entities/Notification/Item',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof NotificationItem>;

type Story = StoryObj<typeof NotificationItem>;

export const Light: Story = {};

const item = {
  id: '1',
  title: 'Title',
  description: 'Description',
};

Light.args = { item };

export const Dark: Story = {};

Dark.args = { item };

Dark.decorators = [ThemeDecorator(Theme.DARK)];
