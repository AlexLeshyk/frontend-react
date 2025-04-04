import { memo, useCallback, useState } from 'react';
import cx from 'clsx';
import NotificationIcon from 'shared/icons/notification.svg';
import { useMediaQuery } from '@mantine/hooks';
import { NotificationList } from '@/entities/Notification';
import { ButtonTheme } from '@/shared/ui/Button/Button.model';
import { AnimationProvider } from '@/shared/lib/components';
import { Button, Drawer, Popover } from '@/shared/ui';
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
          <AnimationProvider>
            <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
              <NotificationList />
            </Drawer>
          </AnimationProvider>
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
