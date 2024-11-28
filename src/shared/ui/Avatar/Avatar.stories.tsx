import { Meta, StoryObj } from '@storybook/react';
import AvatarImage from './avatar.jpg';

import { Avatar } from './Avatar';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {};
Primary.args = {
  size: 150,
  src: AvatarImage,
};
