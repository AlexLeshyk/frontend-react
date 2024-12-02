import { Meta, StoryObj } from '@storybook/react';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

export default {
  title: 'entities/ArticleImageBlockComponent',
  component: ArticleImageBlockComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleImageBlockComponent>;

type Story = StoryObj<typeof ArticleImageBlockComponent>;

export const Primary: Story = {};
Primary.args = {
};
