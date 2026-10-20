import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import {
  useGetProfileRating,
  useRateProfile,
} from '../../api/profileRatingApi';
import { getUserAuthData } from '@/entities/User/model/selectors/user';
import { Skeleton } from '@/shared/ui';

export interface ProfileRatingProps {
  className?: string;
  profileId: string;
}

const ProfileRating = memo((props: ProfileRatingProps) => {
  const { className, profileId } = props;
  const { t } = useTranslation();

  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetProfileRating(
    { userId: userData?.id ?? '', profileId },
    { skip: !userData?.id },
  );

  const [rateProfile] = useRateProfile();

  const handleRateProfile = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateProfile({
          userId: userData?.id ?? '',
          profileId,
          rate: starsCount,
          feedback,
        });
      } catch (e) {
        // handle error
        console.log(e);
      }
    },
    [profileId, rateProfile, userData?.id],
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateProfile(starsCount, feedback);
    },
    [handleRateProfile],
  );

  if (isLoading) {
    return <Skeleton height={120} width="100%" />;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      className={className}
      title={t('Оцените данный профиль')}
      feedbackTitle={t(
        'Оставьте свой отзыв о профиле, это поможет улучшить качество',
      )}
      hasFeedback
      rate={rating?.rate}
      onAccept={onAccept}
    />
  );
});

export default ProfileRating;
