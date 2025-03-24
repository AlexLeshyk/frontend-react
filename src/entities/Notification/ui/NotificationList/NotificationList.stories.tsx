import { StoryObj, Meta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storyBook/StoreDecorator';
import { Notification } from '../../model/types/notification';
import { NotificationList } from './NotificationList';

export default {
  title: 'entities/Notification/List',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof NotificationList>;

type Story = StoryObj<typeof NotificationList>;

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

export const Light: Story = {};
Light.args = {};
Light.decorators = [StoreDecorator({})];

Light.parameters = {
  mockData: [
    {
      url: 'http://localhost:8000/notifications',
      method: 'GET',
      status: 200,
      response: data,
    },
  ],
};
