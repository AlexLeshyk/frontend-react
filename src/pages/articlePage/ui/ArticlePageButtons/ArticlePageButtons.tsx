import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button } from 'shared/ui';
import cx from 'clsx';
import { useSelector } from 'react-redux';
import { getArticleData } from 'entities/Article';
import { getArticleCanEdit } from '../../model/selectors/article';

import classes from './ArticlePageButtons.module.css';

export interface ArticlePageButtonsProps {
  className?: string
}

export const ArticlePageButtons = memo((props: ArticlePageButtonsProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const article = useSelector(getArticleData);
  const canEdit = useSelector(getArticleCanEdit);

  const navigate = useNavigate();

  const onBackToList = useCallback(() => {
    navigate(RoutePath.article_list);
  }, [navigate]);

  const onEdit = useCallback(() => {
    navigate(`${RoutePath.article}${article?.id}/edit`);
  }, [article?.id, navigate]);

  return (
    <div className={cx({
      [classes.wrapper]: true,
      [className as string]: className,
    })}
    >
      <Button onClick={onBackToList} className={classes.back}>{t('List back')}</Button>
      {canEdit && <Button onClick={onEdit} className={classes.edit}>{t('Edit')}</Button>}
    </div>

  );
});
