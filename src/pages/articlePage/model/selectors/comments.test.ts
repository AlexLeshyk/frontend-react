import { StateModel } from '@/app/providers/StoreProvider';

import { getArticleCommentsError, getArticleCommentsIsLoading } from './comments';

describe('getArticleCommentsData', () => {
  test('should return articleComments error state', () => {
    const state: DeepPartial<StateModel> = {
      articleDetailsPage: { comments: { error: 'error' } },
    };
    expect(getArticleCommentsError(state as StateModel)).toEqual('error');
  });

  test('should work with empty articleComments error state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getArticleCommentsError(state as StateModel)).toEqual(undefined);
  });

  test('should return articleComments isLoading state', () => {
    const state: DeepPartial<StateModel> = {
      articleDetailsPage: { comments: { isLoading: true } },
    };
    expect(getArticleCommentsIsLoading(state as StateModel)).toEqual(true);
  });

  test('should work with empty articleComments isLoading state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getArticleCommentsIsLoading(state as StateModel)).toEqual(undefined);
  });
});
