import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { LinkComponent, LinkTheme } from './LinkComponent';

export default {
  title: 'shared/Link',
  component: LinkComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof LinkComponent>;

const Template: ComponentStory<typeof LinkComponent> = (args) => <LinkComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  theme: LinkTheme.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Primary Dark',
  theme: LinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  theme: LinkTheme.SECONDARY,
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Secondary Dark',
  theme: LinkTheme.SECONDARY,
};

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
