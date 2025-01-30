module.exports = (
  layer,
  componentName
) => `import { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from './${componentName}';

export default {
  title: '${layer}/${componentName}',
  component: ${componentName},
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ${componentName}>;

type Story = StoryObj<typeof ${componentName}>;

export const Primary: Story = {};
Primary.args = {};`;
