import { StoryObj, Meta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator';
import { Sidebar } from './Sidebar';

export default {
  title: 'widget/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Sidebar>;

type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {};
Light.args = {};

Light.decorators = [StoreDecorator({ user: { authData: {} } })];

export const Dark: Story = {};
Dark.args = {};

Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ user: { authData: {} } }),
];

export const NotAuth: Story = {};
NotAuth.args = {};

NotAuth.decorators = [StoreDecorator({ user: {} })];
