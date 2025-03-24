import cx from 'clsx';
import { memo } from 'react';
import { Card, Skeleton } from '@/shared/ui';
import { ArticleListView } from '../../model/consts/consts';

import classes from './ArticleListItem.module.css';

interface ArticleListItemSkeletonProps {
  view: ArticleListView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
  const { view } = props;

  if (view === ArticleListView.LIST) {
    return (
      <div className={cx({
        [classes.item]: true,
        [classes[view]]: view,
      })}
      >
        <Card className={classes.card}>
          <div className={classes.header}>
            <Skeleton border="50%" width={30} height={30} />
            <Skeleton width={150} height={16} className={classes.username} />
            <Skeleton width={100} height={16} className={classes.date} />
          </div>
          <Skeleton width={250} height={24} className={classes.title} />
          <Skeleton className={classes.image} height={200} width={200} />
          <div className={classes.footer}>
            <Skeleton height={36} width={200} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      className={cx({
        [classes.item]: true,
        [classes[view]]: view,
      })}
    >
      <Card className={classes.card}>
        <div className={classes.imageWrapper}>
          <Skeleton className={classes.image} width="100%" height={200} />
        </div>
        <div className={classes.info}>
          <div style={{ width: '100%' }}>
            <Skeleton width={130} height={16} />
          </div>

          <Skeleton width={150} height={20} className={classes.title} />
        </div>
      </Card>
    </div>
  );
});
