import cx from 'clsx';
import { memo } from 'react';

import classes from './ArticleList.module.css';
import { Article, ArticleListView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  articles: Array<Article>;
  isLoading?: boolean;
  view?: ArticleListView;
}

export const ArticleList = memo((props: ArticleListProps) => {
  const { articles, isLoading, view = ArticleListView.TILE } = props;

  const renderArticle = (article: Article) => (
    <ArticleListItem key={article.id} article={article} view={view} />
  );

  const getSkeletons = (view: ArticleListView) => new Array(view === ArticleListView.TILE ? 9 : 3)
    // eslint-disable-next-line react/no-array-index-key
    .fill(0).map((_, index) => (<ArticleListItemSkeleton view={view} key={index} />));

  if (isLoading) {
    return (
      <div className={cx({
        [classes.wrapper]: true,
        [classes[view]]: view,
      })}
      >
        {getSkeletons(view)}
      </div>
    );
  }

  if (articles.length === 0) {
    return null;
  }

  return (
    <div className={cx({
      [classes.wrapper]: true,
      [classes[view]]: view,
    })}
    >
      {articles?.length > 0 ? articles?.map(renderArticle) : null}
    </div>
  );
});
