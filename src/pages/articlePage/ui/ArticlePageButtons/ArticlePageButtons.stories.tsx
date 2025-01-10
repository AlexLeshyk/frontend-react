import { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticlePageButtons } from './ArticlePageButtons';

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
Primary.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
})];
