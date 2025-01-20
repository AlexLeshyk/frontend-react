/* eslint-disable react/jsx-indent */
import { Meta, StoryObj } from '@storybook/react';

import { Button } from '@headlessui/react';
import { UserCircleIcon } from '@heroicons/react/16/solid';
import { Dropdown } from './Dropdown';

export default {
  title: 'shared/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Dropdown>;

type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {};

Primary.args = {
  items: [
    { content: 'First point' },
    { content: 'Second point' },
    { content: 'Third point' },
  ],
  trigger: <>
    <UserCircleIcon width={16} height={16} />
    Open
           </>,
};
