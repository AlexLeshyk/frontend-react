import { StoryObj, Meta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator';

import ForbiddenPage from './ForbiddenPage';

export default {
  title: 'pages/ForbiddenPage',
  component: ForbiddenPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ForbiddenPage>;

type Story = StoryObj<typeof ForbiddenPage>;

export const Light: Story = {};
Light.args = {};

Light.decorators = [StoreDecorator({
})];

export const Dark: Story = {};
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
})];
