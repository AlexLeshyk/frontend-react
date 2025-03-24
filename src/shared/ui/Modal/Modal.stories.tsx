import { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;

export const Light: Story = {};
Light.args = {
  isOpen: true,
  children:
    'Content here  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusamus itaque fuga voluptate veniam consectetur.',
};

export const Dark: Story = {};
Dark.args = {
  isOpen: true,
  children:
    'Content here  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusamus itaque fuga voluptate veniam consectetur.',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
