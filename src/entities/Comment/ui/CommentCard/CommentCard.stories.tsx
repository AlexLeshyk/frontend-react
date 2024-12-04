import { Meta, StoryObj } from '@storybook/react';
import avatar from 'shared/images/tests/oduvanchik-na-solncze.jpg';
import { CommentCard } from './CommentCard';

export default {
  title: 'entities/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof CommentCard>;

type Story = StoryObj<typeof CommentCard>;

export const Primary: Story = {
  args: {
    comment: {
      user: {
        username: 'Alex',
        id: '1',
        avatar,
      },
      text: 'some text',
      id: '1',
    },
  },
};
