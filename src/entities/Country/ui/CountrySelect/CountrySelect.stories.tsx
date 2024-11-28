import { Meta, StoryObj } from '@storybook/react';

import { CountrySelect } from './CountrySelect';

export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof CountrySelect>;

type Story = StoryObj<typeof CountrySelect>;

export const Primary: Story = {};
Primary.args = {};
