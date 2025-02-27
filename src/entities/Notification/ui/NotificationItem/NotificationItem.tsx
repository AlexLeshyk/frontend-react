/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import cx from 'clsx';
import { Card, LinkComponent, Text } from 'shared/ui';
import { CardTheme } from 'shared/ui/Card/Card';
import { TextSize } from 'shared/ui/Text/Text';
import classes from './NotificationItem.module.css';
import { Notification } from '../../model/types/notification';

interface NotificationItemProps {
    className?: string;
    item: Notification
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, item } = props;

  const content = (
    <Card
      theme={CardTheme.OUTLINED}
      className={cx({ [classes.item]: true, [className as string]: className })}
    >
      <Text title={item.title} text={item.description} size={TextSize.S} />
    </Card>
  );

  if (item.href) {
    return (
      <LinkComponent className={classes.link} target="_blank" to={item.href} rel="noreferrer">
        {content}
      </LinkComponent>
    );
  }

  return content;
});
