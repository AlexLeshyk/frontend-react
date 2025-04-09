import { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './Textarea';

export default {
  title: 'shared/Textarea',
  component: Textarea,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Textarea>;

type Story = StoryObj<typeof Textarea>;

export const InputText: Story = {};
InputText.args = {
  placeholder: 'Введите текст',
  label: 'Description',
  value: 'Текст',
  autofocus: true,
  htmlFor: 'id12',
  rows: 4,
  cols: 50,
};
