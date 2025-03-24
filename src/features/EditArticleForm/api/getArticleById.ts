import { ArticleModel } from '@/entities/Article';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetArticleByIdArg {
  userId: string;
  articleId: string;
}

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticlebyId: build.query<ArticleModel, GetArticleByIdArg >({
      query: ({ articleId, userId }) => ({
        url: `/articles/${articleId}`,
        params: {
          userId,
          articleId,
        },
      }),
    }),
    updateArticle: build.mutation<void, ArticleModel>({
      query: (arg) => ({
        url: `/articles/${arg.id}`,
        method: 'PUT',
        body: arg,
      }),
    }),
  }),
});

export const useGetArticleById = recommendationsApi.useGetArticlebyIdQuery;
export const useUpdateArticle = recommendationsApi.useUpdateArticleMutation;
