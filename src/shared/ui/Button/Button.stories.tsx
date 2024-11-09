import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { Button } from './Button';
import { ButtonSize, ButtonTheme } from './Button.model';

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
  theme: ButtonTheme.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Primary',
  theme: ButtonTheme.PRIMARY,
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
  children: 'Clear',
  theme: ButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Outline Light',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.SMALL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Outline Dark',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.SMALL,
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
  children: 'Outline Light',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.MEDIUM,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Outline Light',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.LARGE,
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
  children: 'Background',
  theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Background Inverted',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.SMALL,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.MEDIUM,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.LARGE,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  theme: ButtonTheme.OUTLINE,
  disabled: true,
};
