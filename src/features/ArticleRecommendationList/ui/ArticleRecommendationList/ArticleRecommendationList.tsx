import cx from 'clsx';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { TextTheme } from '@/shared/ui/Text/Text.model';
import { TitleSize } from '@/shared/ui/Title/Title';
import { ArticleList, ArticleListView, ArticleModel } from '@/entities/Article';
import {
  Skeleton, Text, Title, VStack,
} from '@/shared/ui';
import { useArticleRecommendationList } from '../../api/aritcleRecommendationsApi';
import classes from './ArticleRecommendationList.module.css';

interface ArticleRecommendationListProps {
  className?: string;
}

export const ArticleRecommendationList = memo((props: ArticleRecommendationListProps) => {
  const { className } = props;

  const { t } = useTranslation('article');

  const { data: articles, isLoading, error } = useArticleRecommendationList(3);

  // if (isLoading || error || !articles) {
  //   return null;
  // }

  if (isLoading || !articles) {
    return (
      <div className={cx({
        [classes.list]: true,
        [className as string]: className,
      })}
      >
        <Skeleton width="100%" height={64} />
      </div>
    );
  }

  if (error) {
    return <Text theme={TextTheme.ERROR} text={t('ArticleRecommendError')} />;
  }

  return (
    <VStack gap="8" className={cx({ [className as string]: className, [classes.wrapper]: true })}>
      <Title title={t('Recommend')} size={TitleSize.H3} className={classes.title} />
      <ArticleList
        articles={articles as Array<ArticleModel>}
        target="_blank"
        view={ArticleListView.LINE}
        isLoading={isLoading}
      />
    </VStack>
  );
});
