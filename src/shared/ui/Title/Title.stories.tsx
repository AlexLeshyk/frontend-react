import { Meta, StoryObj } from '@storybook/react';
import { Title, TitleSize } from './Title';

export default {
  title: 'shared/Title',
  component: Title,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Title>;
type Story = StoryObj<typeof Title>;

export const TitleH1: Story = {};
TitleH1.args = {
  title: 'Primary title',
};

export const TitleH2: Story = {};
TitleH2.args = {
  title: 'Title H2 Level',
  size: TitleSize.H2,
};

export const TitleH3: Story = {};
TitleH3.args = {
  title: 'Title H3 Level',
  size: TitleSize.H3,
};

export const TitleH4: Story = {};
TitleH4.args = {
  title: 'Title H4 Level',
  size: TitleSize.H4,
};

export const TitleH5: Story = {};
TitleH5.args = {
  title: 'Title H5 Level',
  size: TitleSize.H5,
};

export const TitleH6: Story = {};
TitleH6.args = {
  title: 'Title H6 Level',
  size: TitleSize.H6,
};
