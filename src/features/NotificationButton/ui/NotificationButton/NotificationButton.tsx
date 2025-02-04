import { memo } from 'react';
import cx from 'clsx';
import NotificationIcon from 'shared/icons/notification.svg';
import { NotificationList } from 'entities/Notification';
import { Button, Popover } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button.model';
import classes from './NotificationButton.module.css';

export interface NotificationItemProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationItemProps) => {
  const { className } = props;

  return (
    <Popover
      className={cx({ [className as string]: className })}
      trigger={(
        <Button theme={ButtonTheme.CLEAR} className={classes.button}>
          <NotificationIcon className={classes.icon} />
        </Button>
    )}
    >
      <NotificationList className={classes.notifications} />
    </Popover>
  );
});
