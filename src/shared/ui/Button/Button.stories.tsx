import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { Button, ThemeButton } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  theme: ThemeButton.PRIMARY,
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Clear',
  theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Outline Light',
  theme: ThemeButton.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Outline Dark',
  theme: ThemeButton.OUTLINE,
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
