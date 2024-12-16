import cx from 'clsx';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Avatar, Button, Card, LinkComponent, Text, Title,
} from 'shared/ui';
import EyeIcon from 'shared/icons/eye.svg';
import { TitleSize } from 'shared/ui/Title/Title';
import { ButtonTheme } from 'shared/ui/Button/Button.model';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
  Article, ArticleBlockType, ArticleListView, ArticleTextBlock,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import classes from './ArticleListItem.module.css';

interface ArticleListItemProps {
  article: Article;
  view: ArticleListView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { article, view, target } = props;
  const { t } = useTranslation('articleList');

  const types = <Text text={article.type.join(', ')} className={classes.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={classes.views} />
      <EyeIcon />
    </>
  );

  if (view === ArticleListView.LIST) {
    const textBlock = article.blocks.find((item) => item.type === ArticleBlockType.TEXT) as ArticleTextBlock;
    return (
      <div className={cx({
        [classes.item]: true,
        [classes[view]]: view,
      })}
      >
        <Card className={classes.card}>
          <div className={classes.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={classes.username} />
            <Text text={article.createdAt} className={classes.date} />
          </div>
          <Text title={article.title} className={classes.title} />
          {types}
          <img src={article.img} className={classes.image} alt={article.title} />
          {textBlock && (
            <ArticleTextBlockComponent block={textBlock} className={classes.textBlock} />
          )}
          <div className={classes.footer}>
            <LinkComponent
              target={target}
              to={RoutePath.article_list + article.id}
            >
              <Button theme={ButtonTheme.OUTLINE}>
                {t('Read more')}
              </Button>
            </LinkComponent>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <LinkComponent
      target={target}
      to={RoutePath.article_list + article.id}
      className={cx({
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
          {types}
          {views}
          <Title size={TitleSize.H5} title={article.title} className={classes.title} />
        </div>
      </Card>
    </LinkComponent>
  );
});
