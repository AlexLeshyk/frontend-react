import { ArticleModel } from 'entities/Article';
import { rtkApi } from 'shared/api/rtkApi';

export type AddNewArticlePayload = {
  id: string
}
export type AddNewArticleResponse = {
  article: ArticleModel
}

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticlebyId: build.query<Array<ArticleModel>, string >({
      query: (id) => ({
        url: `/articles/${id}`,
        params: {
          _expand: 'user',
        },
      }),
    }),
  }),
});

export const useGetArticleById = recommendationsApi.useGetArticlebyIdQuery;
