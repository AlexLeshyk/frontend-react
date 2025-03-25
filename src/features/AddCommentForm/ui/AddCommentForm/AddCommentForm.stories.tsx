import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storyBook/StoreDecorator';
import AddCommentForm from './AddCommentForm';

export default {
  title: 'features/CommentCard',
  component: AddCommentForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof AddCommentForm>;

type Story = StoryObj<typeof AddCommentForm>;

export const Primary: Story = {};
Primary.args = {};

Primary.decorators = [
  StoreDecorator({
    addCommentForm: { message: 'comment' },
  }),
];
