import { Meta, StoryObj } from '@storybook/react';
import NotificationIcon from '@/shared/icons/notification.svg';
import { Popover } from './Popover';
import { Button } from '../Button/Button';
import { ButtonTheme } from '../Button/Button.model';

export default {
  title: 'shared/Popover',
  component: Popover,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Popover>;

type Story = StoryObj<typeof Popover>;

export const Primary: Story = {};

Primary.args = {
  children: <div>Text</div>,
  trigger: <Button type="button" theme={ButtonTheme.CLEAR}><NotificationIcon /></Button>,
};
