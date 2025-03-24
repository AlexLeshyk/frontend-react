import cx from 'clsx';
import { memo } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { TextSize } from '@/shared/ui/Text/Text';
import { Avatar, LinkComponent, Text } from '@/shared/ui';
import { Comment } from '../../model/types/comment';
import classes from './CommentCard.module.css';

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  const { user, text } = comment;

  if (isLoading) {
    return (
      <div className={cx({
        [classes.card]: true,
        [className as string]: className,
      })}
      >
        <div className={classes.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={16} />
        </div>
        <Skeleton width="100%" height={50} className={classes.commentText} />
      </div>
    );
  }

  return (
    <div className={cx({
      [classes.card]: true,
      [className as string]: className,
    })}
    >
      <LinkComponent className={classes.header} to={`${RoutePath.profile}${user.id}`}>
        {user.avatar && <Avatar size={30} src={user.avatar} />}
        <Text title={user.username} size={TextSize.S} className={classes.headerTitle} />
      </LinkComponent>
      <Text text={text} size={TextSize.S} className={classes.commentText} />
    </div>
  );
});
