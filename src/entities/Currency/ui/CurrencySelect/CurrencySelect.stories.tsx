import { Meta, StoryObj } from '@storybook/react';

import { CurrencySelect } from './CurrencySelect';

export default {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof CurrencySelect>;

type Story = StoryObj<typeof CurrencySelect>;

export const Primary: Story = {};
Primary.args = {};
