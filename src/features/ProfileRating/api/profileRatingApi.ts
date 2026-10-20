import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '@/entities/Rating';

interface GetProfileRatingArgs {
  userId: string;
  profileId: string;
}

interface RateProfileArgs {
  userId: string;
  profileId: string;
  rate: number;
  feedback?: string;
}

const profileRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getProfileRating: build.query<Array<Rating>, GetProfileRatingArgs>({
      query: ({ userId, profileId }) => ({
        url: '/profile-ratings',
        params: { userId, profileId },
      }),
    }),
    rateProfile: build.mutation<void, RateProfileArgs>({
      query: (args) => ({
        url: '/profile-ratings',
        method: 'POST',
        body: args,
      }),
    }),
  }),
});

export const useGetProfileRating = profileRatingApi.useGetProfileRatingQuery;
export const useRateProfile = profileRatingApi.useRateProfileMutation;
