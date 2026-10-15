import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '@/entities/Rating';

interface GetArticleRatingArgs {
  userId: string;
  articleId: string;
}

interface RateArticleArgs {
  userId: string;
  articleId: string;
  rate: number;
  feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Array<Rating>, GetArticleRatingArgs>({
      query: ({ userId, articleId }) => ({
        url: '/article-ratings',
        params: { userId, articleId },
      }),
    }),
    rateArticle: build.mutation<void, RateArticleArgs>({
      query: (args) => ({
        url: '/article-ratings',
        method: 'POST',
        body: args,
      }),
    }),
  }),
});

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
