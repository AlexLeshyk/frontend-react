import { ArticleModel } from '@/entities/Article';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetArticleByIdArg {
  userId: string;
  articleId: string;
}

const articlesApi = rtkApi.injectEndpoints({
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
    addNewArticle: build.mutation<void, ArticleModel>({
      query: (arg) => ({
        url: '/articles',
        method: 'POST',
        body: arg,
      }),
    }),
  }),
});

export const useGetArticleById = articlesApi.useGetArticlebyIdQuery;
export const useUpdateArticle = articlesApi.useUpdateArticleMutation;
export const useAddNewArticle = articlesApi.useAddNewArticleMutation;
