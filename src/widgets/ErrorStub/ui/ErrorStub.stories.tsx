import { StoryObj, Meta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { ErrorStub } from './ErrorStub';

export default {
  title: 'widget/ErrorStub',
  component: ErrorStub,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ErrorStub>;

type Story = StoryObj<typeof ErrorStub>;

export const Light: Story = {};
Light.args = {};

export const Dark: Story = {};
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
