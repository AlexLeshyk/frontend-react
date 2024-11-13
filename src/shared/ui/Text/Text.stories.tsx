import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { Text } from './Text';
import { TextTheme } from './Text.model';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Primary title',
  text: 'A lot of some text',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Only a lot of some text',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Only title',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Error title',
  text: 'A lot of some text',
  theme: TextTheme.ERROR,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title dark',
  text: 'A lot of some text',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Only a lot of dark text',
};

OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Only title dark',
};

OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
