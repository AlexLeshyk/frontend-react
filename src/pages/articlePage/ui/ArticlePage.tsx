import { Article } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Title } from 'shared/ui';
import { TitleSize } from 'shared/ui/Title/Title';
import { DynamicModuleLoader, ReducersList } from 'shared/lib';
import { useSelector } from 'react-redux';
import { useAppDispatch, useInitialEffect } from 'shared/hooks';
import { AddCommentForm } from 'features/AddCommentForm';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page';
import { articleCommentsReducer, getArticleComments } from '../model/slice/articleCommentsSlice';
import { getArticleCommentsIsLoading } from '../model/selectors/comments';
import { getCommentsByArticleId } from '../model/services/getCommentsByArticleId/getCommentsByArticleId';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import classes from './ArticlePage.module.css';

const reducers: ReducersList = {
  articleComments: articleCommentsReducer,
};

const ArticlePage = () => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);

  useInitialEffect(() => {
    dispatch(getCommentsByArticleId(id));
  });

  const onAddComment = useCallback((value: string) => {
    dispatch(addCommentForArticle(value));
  }, [dispatch]);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.article_list);
  }, [navigate]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page>
        <Button onClick={onBackToList}>{t('List back')}</Button>
        <Article id={id as string} />
        <Title title={t('Comments')} size={TitleSize.H3} className={classes.commentTitle} />
        <AddCommentForm onAddComment={onAddComment} />
        <CommentList
          isLoading={isLoading}
          comments={comments}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlePage);
