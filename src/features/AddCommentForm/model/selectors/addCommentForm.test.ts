import { StateModel } from '@/app/providers/StoreProvider';

import { getAddCommentFormError, getAddCommentFormMessage } from './addCommentForm';

describe('addCommentFormData', () => {
  test('should return addCommentForm error state', () => {
    const state: DeepPartial<StateModel> = {
      addCommentForm: { error: 'error' },
    };
    expect(getAddCommentFormError(state as StateModel)).toEqual('error');
  });

  test('should work with empty addCommentForm error state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getAddCommentFormError(state as StateModel)).toEqual(undefined);
  });

  test('should return addCommentForm message state', () => {
    const state: DeepPartial<StateModel> = {
      addCommentForm: { message: 'comment' },
    };
    expect(getAddCommentFormMessage(state as StateModel)).toEqual('comment');
  });

  test('should work with empty addCommentForm message state', () => {
    const state: DeepPartial<StateModel> = {};
    expect(getAddCommentFormMessage(state as StateModel)).toEqual('');
  });
});
