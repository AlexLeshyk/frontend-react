import { Meta, StoryObj } from '@storybook/react';
import { Article } from './Article';

export default {
  title: 'entities/Article',
  component: Article,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Article>;

type Story = StoryObj<typeof Article>;

export const Primary: Story = {};
Primary.args = {
};
