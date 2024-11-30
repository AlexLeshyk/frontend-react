import { Meta, StoryObj } from '@storybook/react';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

export default {
  title: 'entities/ArticleCodeBlockComponent',
  component: ArticleCodeBlockComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleCodeBlockComponent>;

type Story = StoryObj<typeof ArticleCodeBlockComponent>;

export const Primary: Story = {};
Primary.args = {
};
