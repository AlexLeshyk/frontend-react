import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
  isOpen: true,
  children: 'Content here  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusamus itaque fuga voluptate veniam consectetur.',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Content here  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusamus itaque fuga voluptate veniam consectetur.',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
