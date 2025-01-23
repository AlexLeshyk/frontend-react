import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Title } from 'shared/ui';
import { AddCommentForm } from 'features/AddCommentForm';
import { CommentList } from 'entities/Comment';
import { TitleSize } from 'shared/ui/Title/Title';
import { useSelector } from 'react-redux';
import { useAppDispatch, useInitialEffect } from 'shared/hooks';
import { getArticleComments } from '../../model/slice/articleCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getCommentsByArticleId } from '../../model/services/getCommentsByArticleId/getCommentsByArticleId';

export interface ArticlePageCommentsProps {
  id?: string;
}

export const ArticlePageComments = memo((props: ArticlePageCommentsProps) => {
  const { id } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const onAddComment = useCallback((value: string) => {
    dispatch(addCommentForArticle(value));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(getCommentsByArticleId(id));
  });

  return (
    <>
      <Title title={t('Comments')} size={TitleSize.H3} />
      <AddCommentForm onAddComment={onAddComment} />
      <CommentList
        isLoading={commentsIsLoading}
        comments={comments}
      />
    </>

  );
});
