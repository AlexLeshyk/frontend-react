import { Meta, StoryObj } from '@storybook/react';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';

export default {
  title: 'entities/ArticleTextBlockComponent',
  component: ArticleTextBlockComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleTextBlockComponent>;

type Story = StoryObj<typeof ArticleTextBlockComponent>;

export const Primary: Story = {};
Primary.args = {
};
