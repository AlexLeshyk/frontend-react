import cx from 'clsx';
import { DynamicModuleLoader, ReducersList } from 'shared/lib';
import { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Avatar, Text, Title } from 'shared/ui';
import { TextAlign, TextTheme } from 'shared/ui/Text/Text.model';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import EyeIcon from 'shared/icons/eye.svg';
import CalendarIcon from 'shared/icons/calendar.svg';
import { TitleSize } from 'shared/ui/Title/Title';
import { getArticleById } from '../../model/services/getArticleById/getArticleById';
import { articleReducer } from '../../model/slices/articleSlice';
import { getArticleData, getArticleError, getArticleIsLoading } from '../../model/selectors/article';

import classes from './Article.module.css';

interface ArticleProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  article: articleReducer,
};

export const Article = memo((props: ArticleProps) => {
  const { className, id } = props;
  let content;
  const dispatch = useAppDispatch();
  const { t } = useTranslation('article');
  const article = useSelector(getArticleData);
  const error = useSelector(getArticleError);
  const isLoading = useSelector(getArticleIsLoading);

  useEffect(() => {
    dispatch(getArticleById(id));
  }, [dispatch, id]);

  if (isLoading) {
    content = (
      <>
        <Skeleton border="50%" width={200} height={200} className={classes.skeletonImage} />
        <Skeleton width={300} height={32} className={classes.title} />
        <Skeleton width={600} height={24} className={classes.skeleton} />
        <Skeleton width="100%" height={200} className={classes.skeleton} />
        <Skeleton width="100%" height={200} className={classes.skeleton} />
      </>
    );
  }

  if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        theme={TextTheme.ERROR}
        title={t('ArticleError')}
      />
    );
  }

  if (article) {
    content = (
      <>
        <Avatar src={article?.img} size={200} className={classes.avatar} />
        <Title title={article?.title} size={TitleSize.H2} />
        <Text text={article.subtitle} />
        <div className={classes.views}>
          <EyeIcon className={classes.icon} />
          <span>{article.views}</span>
        </div>
        <div className={classes.time}>
          <CalendarIcon className={classes.icon} />
          <time>{article.createdAt}</time>
        </div>
      </>
    );
  }

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div className={cx({
        [className as string]: className,
      })}
      >
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
