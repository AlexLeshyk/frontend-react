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
  label: 'Выберите значение',
  items: [
    { value: '1', name: 'Первый пункт' },
    { value: '2', name: 'Второй пункт' },
  ],
  defaultValue: 'Выберите значение',
  direction: 'bottom right',
};
