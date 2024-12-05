import cx from 'clsx';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Button, Input } from 'shared/ui';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks';
import { DynamicModuleLoader, ReducersList } from 'shared/lib';
import { getAddCommentFormMessage } from '../../model/selectors/addCommentForm';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';

import classes from './AddCommentForm.module.css';

export interface AddCommentFormProps {
  className?: string;
  onAddComment: (value: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onAddComment } = props;

  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const message = useSelector(getAddCommentFormMessage);

  const onCommentChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setMessage(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onAddComment(message || '');
    onCommentChange('');
  }, [message, onAddComment, onCommentChange]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <form className={cx({
        [classes.form]: true,
        [className as string]: className,
      })}
      >
        <Input
          label={t('Comment')}
          htmlFor="comment"
          placeholder={t('EnterComment')}
          value={message}
          onChange={onCommentChange}
          className={classes.input}
        />
        <Button onClick={onSendHandler} className={classes.button}>{t('Send')}</Button>
      </form>
    </DynamicModuleLoader>

  );
});

export default AddCommentForm;
