import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Выберите значение',
  options: [
    { value: '1', name: 'Первый пункт' },
    { value: '2', name: 'Второй пункт' },
  ],
};
