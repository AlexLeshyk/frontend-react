import { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const InputText: Story = {};
InputText.args = {
  placeholder: 'Введите текст',
  label: 'Заголовок',
  autofocus: true,
  htmlFor: 'id11',
};
