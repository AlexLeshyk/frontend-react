import { Meta, StoryObj } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ListBox>;

type Story = StoryObj<typeof ListBox>;

export const Primary: Story = {};

Primary.args = {
  label: 'Select value',
  items: [
    { value: '1', name: 'First' },
    { value: '2', name: 'Second' },
    { value: '3', name: 'Third' },
  ],
  defaultValue: 'Select value',
  direction: 'bottom right',
};
