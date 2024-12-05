import cx from 'clsx';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Skeleton, Text } from 'shared/ui';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';
import classes from './CommentList.module.css';

interface CommentListProps {
  className?: string;
  isLoading?: boolean;
  comments: Array<Comment>
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, isLoading, comments } = props;

  const { t } = useTranslation('article');

  if (isLoading) {
    return (
      <div className={cx({
        [classes.list]: true,
        [className as string]: className,
      })}
      >
        <Skeleton width="100%" height={64} className={classes.comment} />
        <Skeleton width="100%" height={64} className={classes.comment} />
      </div>
    );
  }

  return (
    <div className={cx({
      [classes.list]: true,
      [className as string]: className,
    })}
    >
      {comments.length > 0
        ? comments.map((item) => (
          <CommentCard
            className={classes.comment}
            key={item.id}
            comment={item}
            isLoading={isLoading}
          />
        ))
        : <Text text={t('NoComments')} />}
    </div>
  );
});
