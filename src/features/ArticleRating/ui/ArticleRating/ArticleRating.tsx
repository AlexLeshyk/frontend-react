import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import {
  useGetArticleRating,
  useRateArticle,
} from '../../api/aritcleRatingApi';
import { getUserAuthData } from '@/entities/User/model/selectors/user';
import { Skeleton } from '@/shared/ui';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation();

  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetArticleRating({
    userId: userData?.id ?? '',
    articleId,
  });

  const [rateArticle] = useRateArticle();

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticle({
          userId: userData?.id ?? '',
          articleId,
          rate: starsCount,
          feedback,
        });
      } catch (e) {
        // handle error
        console.log(e);
      }
    },
    [articleId, rateArticle, userData?.id],
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle],
  );

  if (isLoading) {
    return <Skeleton height={120} width="100%" />;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      className={className}
      title={t('Оцените статью')}
      feedbackTitle={t('Оставьте свой отзыв о статье, это поможет улучшить качество')}
      hasFeedback
      rate={rating?.rate}
      onAccept={onAccept}
    />
  );
});

export default ArticleRating;
