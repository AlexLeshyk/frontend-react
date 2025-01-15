import { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
  title: 'shared/Flex',
  component: Flex,
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Row: Story = {
  args: {
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
      </>
    ),

  },
};

export const Column: Story = {
  args: {
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
      </>
    ),
    direction: 'column',
    gap: '16',
  },
};
