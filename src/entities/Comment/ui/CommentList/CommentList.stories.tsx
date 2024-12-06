import { Meta, StoryObj } from '@storybook/react';
import avatar from 'shared/images/tests/oduvanchik-na-solncze.jpg';
import { CommentList } from './CommentList';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof CommentList>;

type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {
  args: {
    comments: [
      {
        user: {
          username: 'Alex',
          id: '1',
          avatar,
        },
        text: 'some text',
        id: '1',
      },
      {
        user: {
          username: 'Dan',
          id: '2',
          avatar,
        },
        text: 'new comment',
        id: '2',
      },
    ],
  },
};

export const isLoading: Story = {
  args: {
    isLoading: true,
    comments: [],
  },
};
