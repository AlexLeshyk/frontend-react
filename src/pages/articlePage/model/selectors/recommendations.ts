import { StateModel } from 'app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (
  state: StateModel,
) => state.articleDetailsPage?.recommendations?.isLoading;
export const getArticleRecommendationsError = (state: StateModel) => state.articleDetailsPage?.recommendations?.error;
