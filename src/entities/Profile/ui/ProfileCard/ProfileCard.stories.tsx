import { ComponentStory, ComponentMeta } from '@storybook/react';
import avatar from 'shared/images/tests/oduvanchik-na-solncze.jpg';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'Alex',
    first: 'Aliaksandr',
    lastname: 'Leshik',
    age: 42,
    currency: Currency.EUR,
    country: Country.Belarus,
    city: 'Minsk',
    avatar,
  },
};

export const withError = Template.bind({});
withError.args = {
  error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
