import cx from 'clsx';
import { HTMLAttributeAnchorTarget, memo } from 'react';

import { Text } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import classes from './ArticleList.module.css';
import { Article, ArticleListView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  articles: Array<Article>;
  isLoading?: boolean;
  view?: ArticleListView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    articles, isLoading, view = ArticleListView.TILE, target,
  } = props;

  const { t } = useTranslation('articleList');

  const renderArticle = (article: Article) => (
    <ArticleListItem key={article.id} article={article} view={view} target={target} />
  );

  const getSkeletons = (view: ArticleListView) => new Array(view === ArticleListView.TILE ? 8 : 3)
    // eslint-disable-next-line react/no-array-index-key
    .fill(0).map((_, index) => (<ArticleListItemSkeleton view={view} key={index} />));

  if (!isLoading && !articles.length) {
    return (
      <div className={cx({ [classes.wrapper]: true, [classes[view]]: view })}>
        <Text title={t('NoArticles')} />
      </div>
    );
  }

  return (
    <div className={cx({
      [classes.wrapper]: true,
      [classes[view]]: view,
    })}
    >
      {articles?.length > 0 ? articles?.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
