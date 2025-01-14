import { Meta, StoryObj } from '@storybook/react';

import { Text } from '../Text/Text';
import { Card } from './Card';

export default {
  title: 'shared/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {};
Primary.args = {
  className: 'card',
  children: <Text text="text" title="Title" />,
};
