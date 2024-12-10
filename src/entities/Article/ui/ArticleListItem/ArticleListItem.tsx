import cx from 'clsx';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Text, Title } from 'shared/ui';
import EyeIcon from 'shared/icons/eye.svg';
import { TitleSize } from 'shared/ui/Title/Title';
import { Article, ArticleListView } from '../../model/types/article';

import classes from './ArticleListItem.module.css';

interface ArticleListItemProps {
  article: Article;
  view: ArticleListView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { article, view } = props;
  const { t } = useTranslation('articleList');

  if (view === ArticleListView.LIST) {
    return (
      <div className={cx({
        [classes.item]: true,
        [classes[view]]: view,
      })}
      >
        {article.title}
      </div>
    );
  }

  return (
    <div className={cx({
      [classes.item]: true,
      [classes[view]]: view,
    })}
    >
      <Card className={classes.card}>
        <div className={classes.imageWrapper}>
          <img src={article.img} className={classes.image} alt={article.title} />
          <Text text={article.createdAt} className={classes.date} />
        </div>
        <div className={classes.info}>
          <Text text={article.type.join(', ')} className={classes.types} />
          <Text text={String(article.views)} className={classes.views} />
          <EyeIcon />
          <Title size={TitleSize.H5} title={article.title} />
        </div>
      </Card>

    </div>
  );
});
