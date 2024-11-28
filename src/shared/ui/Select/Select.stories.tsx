import { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {};

Primary.args = {
  label: 'Выберите значение',
  options: [
    { value: '1', name: 'Первый пункт' },
    { value: '2', name: 'Второй пункт' },
  ],
};
