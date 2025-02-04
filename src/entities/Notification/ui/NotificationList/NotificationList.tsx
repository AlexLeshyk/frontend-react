import { memo } from 'react';
import cx from 'clsx';
import { VStack, Skeleton } from 'shared/ui';
import { useGetNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import classes from './NotificationList.module.css';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props;
  const { data, isLoading } = useGetNotifications(null, { pollingInterval: 25000 });

  if (isLoading) {
    return (
      <VStack
        gap="16"
        max
        className={cx({ [classes.list]: true, [className as string]: className })}
      >
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
      </VStack>
    );
  }

  return (
    <VStack
      gap="16"
      max
      className={cx({ [classes.list]: true, [className as string]: className })}
    >
      {data?.map((item) => (
        <NotificationItem key={item.id} item={item} />
      ))}
    </VStack>
  );
});
