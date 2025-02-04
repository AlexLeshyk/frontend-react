import { StoryObj, Meta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator';
import { Notification } from 'entities/Notification/model/types/notification';
import { NotificationButton } from './NotificationButton';

export default {
  title: 'features/NotificationButton',
  component: NotificationButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof NotificationButton>;

type Story = StoryObj<typeof NotificationButton>;

const data: Array<Notification> = [
  {
    id: '1',
    title: 'Важное событие',
    description: 'Произошло какое-то событие',
  },
  {
    id: '2',
    title: 'Неважное проишествие',
    description: 'Произошло что-то не существенное',
  },
];

const mockData = [
  {
    url: 'http://localhost:8000/notifications',
    method: 'GET',
    status: 200,
    response: data,
  },
];

export const Light: Story = {};
Light.args = {};

Light.decorators = [StoreDecorator({})];

Light.parameters = { mockData };

export const Dark: Story = {};
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
Dark.parameters = { mockData };
