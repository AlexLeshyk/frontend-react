import cx from 'clsx';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/hooks';

import classes from './ArticleList.module.css';
import { Article, ArticleListView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
  articles: Array<Article>;
  isLoading?: boolean;
  view?: ArticleListView;
}

export const ArticleList = memo((props: ArticleListProps) => {
  const { articles, isLoading, view = ArticleListView.TILE } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation('articleList');

  const renderArticle = (article: Article) => (
    <ArticleListItem key={article.id} article={article} view={view} />
  );

  return (
    <div className={cx({
      [classes.list]: true,
    })}
    >
      {articles?.length > 0 ? articles?.map(renderArticle) : null}
    </div>
  );
});
