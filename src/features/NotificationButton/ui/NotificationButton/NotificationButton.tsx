import { memo, useCallback, useState } from 'react';
import cx from 'clsx';
import NotificationIcon from 'shared/icons/notification.svg';
import { NotificationList } from 'entities/Notification';
import { Button, Drawer, Popover } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button.model';
import { useMediaQuery } from '@mantine/hooks';
import classes from './NotificationButton.module.css';

export interface NotificationItemProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationItemProps) => {
  const { className } = props;

  const isMobile = useMediaQuery('(max-width: 600px)');
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <Button theme={ButtonTheme.CLEAR} className={classes.button} onClick={onOpenDrawer}>
      <NotificationIcon className={classes.icon} />
    </Button>
  );

  return (
    <>
      {isMobile && (
        <>
          {trigger}
          <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
            <NotificationList />
          </Drawer>
        </>
      )}
      {!isMobile && (
      <Popover
        className={cx({ [className as string]: className })}
        trigger={trigger}
      >
        <NotificationList className={classes.notifications} />
      </Popover>
      )}
    </>
  );
});
