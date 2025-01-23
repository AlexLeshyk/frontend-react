import { Meta, StoryObj } from '@storybook/react';
import { EditableProfileCard } from './EditableProfileCard';

export default {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof EditableProfileCard>;

type Story = StoryObj<typeof EditableProfileCard>;

export const Primary: Story = {};
Primary.args = {};
