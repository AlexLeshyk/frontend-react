import { StateModel } from '@/app/providers/StoreProvider';

export const getAddCommentFormMessage = (state: StateModel) => state.addCommentForm?.message ?? '';
export const getAddCommentFormError = (state: StateModel) => state.addCommentForm?.error;
