import { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { ArticlePageComments } from './ArticlePageComments';

export default {
  title: 'pages/Article/Comments',
  component: ArticlePageComments,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticlePageComments>;

type Story = StoryObj<typeof ArticlePageComments>;

export const Primary: Story = {};
Primary.args = { id: '1' };

Primary.decorators = [StoreDecorator({
})];

export const Dark: Story = {};
Dark.args = { id: '1' };

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
})];
