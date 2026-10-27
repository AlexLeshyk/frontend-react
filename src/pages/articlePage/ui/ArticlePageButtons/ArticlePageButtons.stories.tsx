import { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { ArticlePageButtons } from './ArticlePageButtons';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'pages/Article/Buttons',
  component: ArticlePageButtons,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticlePageButtons>;

type Story = StoryObj<typeof ArticlePageButtons>;

export const Primary: Story = {};
Primary.args = {};

Primary.decorators = [StoreDecorator({
})];

export const Dark: Story = {};
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
})];
