import { Meta, StoryObj } from '@storybook/react';
import { ArticleType } from 'entities/Article';
import { action } from '@storybook/addon-actions';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleTypeTabs } from './ArticleTypeTabs';

export default {
  title: 'features/Article/ArticleTypeTabs',
  component: ArticleTypeTabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleTypeTabs>;

type Story = StoryObj<typeof ArticleTypeTabs>;

export const Primary: Story = {
  args: {
    value: ArticleType.ECONOMICS,
    onChangeType: action('onChangeType'),
  },
};

export const Dark: Story = {
  args: {
    value: ArticleType.SCIENCE,
    onChangeType: action('onChangeType'),
  },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
