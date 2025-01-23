import cx from 'clsx';
import { memo } from 'react';
import { Text, Title, VStack } from 'shared/ui';
import { TitleSize } from 'shared/ui/Title/Title';
import { ArticleList, ArticleListView } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { TextTheme } from 'shared/ui/Text/Text.model';
import { useArticleRecommendationList } from '../../api/aritcleRecommendationsApi';
import classes from './ArticleRecommendationList.module.css';

interface ArticleRecommendationListProps {
  className?: string;
}

export const ArticleRecommendationList = memo((props: ArticleRecommendationListProps) => {
  const { className } = props;

  const { t } = useTranslation('article');

  const { data: articles, isLoading, error } = useArticleRecommendationList(3);

  if (error) {
    // eslint-disable-next-line i18next/no-literal-string
    return <Text theme={TextTheme.ERROR} text="Error" />;
  }

  return (
    <VStack gap="8" className={cx({ [className as string]: className, [classes.wrapper]: true })}>
      <Title title={t('Recommend')} size={TitleSize.H3} className={classes.title} />
      <ArticleList
        articles={articles}
        target="_blank"
        view={ArticleListView.LINE}
        isLoading={isLoading}
      />
    </VStack>
  );
});
