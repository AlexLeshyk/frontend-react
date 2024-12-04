import cx from 'clsx';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Avatar, Text } from 'shared/ui';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Comment } from '../../model/types/comment';
import classes from './CommentCard.module.css';

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  const { t } = useTranslation('article');
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
      <div className={classes.header}>
        {user.avatar && <Avatar size={30} src={user.avatar} />}
        <Text title={user.username} />
      </div>
      <Text text={text} className={classes.commentText} />
    </div>
  );
});
