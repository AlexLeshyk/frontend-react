import { addCommentFormReducer, addCommentFormActions } from './addCommentFormSlice';
import { AddCommentFormModel } from '../types/addCommentForm';

describe('addCommentFormSlice', () => {
  test('test setMessage', () => {
    const state: DeepPartial<AddCommentFormModel> = { message: '' };
    expect(addCommentFormReducer(state as AddCommentFormModel, addCommentFormActions.setMessage('text'))).toEqual({ message: 'text' });
  });
});
