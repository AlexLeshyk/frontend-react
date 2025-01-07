import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Tabs } from './Tabs';

export default {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Tabs>;

type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {};
Primary.args = {
  className: 'tabs',
  tabs: [
    { value: 'tab1', content: 'tab 1' },
    { value: 'tab2', content: 'tab 2' },
    { value: 'tab3', content: 'tab 3' },
  ],
  value: 'tab2',
  onTabClick: action('onTabClick'),
};
