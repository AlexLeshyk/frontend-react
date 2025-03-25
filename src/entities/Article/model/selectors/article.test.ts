import { StateModel } from '@/app/providers/StoreProvider';

import { getArticleData, getArticleError, getArticleIsLoading } from './article';
import { ArticleType } from '../consts/consts';

describe('getArticleData', () => {
  test('should return article data state', () => {
    const data = {
      id: '1',
      title: 'Заголовок',
      subtitle: 'Подзаголовок',
      img: '/http',
      views: 100,
      createdAt: '10.12.2023',
      userId: '123',
      type: [ArticleType.ECONOMICS],
    };
    const state: DeepPartial<StateModel> = {
      article: {
        data,
      },
    };
    expect(getArticleData(state as StateModel)).toEqual(data);
  });

  test('should work with empty data state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getArticleData(state as StateModel)).toEqual(undefined);
  });

  test('should return article error state', () => {
    const state: DeepPartial<StateModel> = {
      article: {
        error: 'error',
      },
    };
    expect(getArticleError(state as StateModel)).toEqual('error');
  });

  test('should work with empty article error state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getArticleError(state as StateModel)).toEqual(undefined);
  });

  test('should return article isLoading state', () => {
    const state: DeepPartial<StateModel> = {
      article: {
        isLoading: true,
      },
    };
    expect(getArticleIsLoading(state as StateModel)).toEqual(true);
  });

  test('should work with empty article isLoading state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getArticleIsLoading(state as StateModel)).toEqual(undefined);
  });
});
