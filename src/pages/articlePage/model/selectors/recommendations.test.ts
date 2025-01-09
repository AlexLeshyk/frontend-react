import { StateModel } from 'app/providers/StoreProvider';

import { getArticleRecommendationsError, getArticleRecommendationsIsLoading } from './recommendations';

describe('getArticleRecommendationsData', () => {
  test('should return articleRecommendations error state', () => {
    const state: DeepPartial<StateModel> = {
      articleDetailsPage: { recommendations: { error: 'error' } },
    };
    expect(getArticleRecommendationsError(state as StateModel)).toEqual('error');
  });

  test('should work with empty articleRecommendations error state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getArticleRecommendationsError(state as StateModel)).toEqual(undefined);
  });

  test('should return articleRecommendations isLoading state', () => {
    const state: DeepPartial<StateModel> = {
      articleDetailsPage: { recommendations: { isLoading: true } },
    };
    expect(getArticleRecommendationsIsLoading(state as StateModel)).toEqual(true);
  });

  test('should work with empty articleRecommendations isLoading state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getArticleRecommendationsIsLoading(state as StateModel)).toEqual(undefined);
  });
});
