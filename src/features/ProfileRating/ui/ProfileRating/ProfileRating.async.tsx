import { lazy, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton';
import { ProfileRatingProps } from './ProfileRating';

const ProfileRatingLazy = lazy(() => import('./ProfileRating'));

export const ProfileRatingAsync = (props: ProfileRatingProps) => (
  <Suspense fallback={<Skeleton width="100%" height={120} />}>
    <ProfileRatingLazy {...props} />
  </Suspense>
);
