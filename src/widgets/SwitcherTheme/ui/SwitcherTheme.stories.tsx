import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { SwitcherTheme } from './SwitcherTheme';

export default {
  title: 'widget/SwitcherTheme',
  component: SwitcherTheme,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SwitcherTheme>;

const Template: ComponentStory<typeof SwitcherTheme> = () => <SwitcherTheme />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
