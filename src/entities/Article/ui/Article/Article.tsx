import cx from 'clsx';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import EyeIcon from 'shared/icons/eye.svg';
import CalendarIcon from 'shared/icons/calendar.svg';
import { useMediaQuery } from '@mantine/hooks';
import { TextAlign, TextTheme } from '@/shared/ui/Text/Text.model';
import { TitleSize } from '@/shared/ui/Title/Title';
import { useAppDispatch, useInitialEffect } from '@/shared/hooks';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib';
import {
  Avatar, Text, Title, Skeleton,
} from '@/shared/ui';
import { getArticleById } from '../../model/services/getArticleById/getArticleById';
import { articleReducer } from '../../model/slices/articleSlice';
import { getArticleData, getArticleError } from '../../model/selectors/article';
import { ArticleBlock } from '../../model/types/article';
import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import classes from './Article.module.css';

interface ArticleProps {
  id?: string;
}

const reducers: ReducersList = {
  article: articleReducer,
};

export const Article = memo((props: ArticleProps) => {
  const { id } = props;
  let content;
  const dispatch = useAppDispatch();
  const { t } = useTranslation('article');
  const article = useSelector(getArticleData);
  const error = useSelector(getArticleError);
  const isLoading = true;

  const isMobile = useMediaQuery('(max-width: 600px)');

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent className={classes.block} block={block} key={block.id} />;
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent className={classes.block} block={block} key={block.id} />;
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent className={classes.block} block={block} key={block.id} />;
      default: return null;
    }
  }, []);

  useInitialEffect(() => {
    dispatch(getArticleById(id));
  });

  if (isLoading) {
    content = (
      <>
        <Skeleton border="50%" width={200} height={200} className={classes.skeletonImage} />
        <Skeleton width={isMobile ? '100%' : 300} height={32} className={classes.title} />
        <Skeleton width={isMobile ? '100%' : 600} height={24} className={classes.skeleton} />
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
        {article.blocks.map((renderBlock))}
      </>
    );
  }

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div className={cx({
        [classes.wrapper]: true,
      })}
      >
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
