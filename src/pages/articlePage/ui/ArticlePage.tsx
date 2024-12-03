import { Article } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Title } from 'shared/ui';
import { TitleSize } from 'shared/ui/Title/Title';
import { DynamicModuleLoader, ReducersList } from 'shared/lib';
import { useSelector } from 'react-redux';
import classes from './ArticlePage.module.css';
import { articleCommentsReducer, getArticleComments } from '../model/slice/articleCommentsSlice';
import { getArticleCommentsIsLoading } from '../model/selectors/comments';

const reducers: ReducersList = {
  articleComments: articleCommentsReducer,
};

const ArticlePage = () => {
  const { t } = useTranslation('article');

  const { id } = useParams<{ id: string }>();

  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);

  if (!id) {
    return (
      <div>
        {t('ArticleNotFound')}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Article id={id} />
      <Title title={t('Comments')} size={TitleSize.H3} className={classes.commentTitle} />
      <CommentList
        isLoading={isLoading}
        comments={comments}
      />
    </DynamicModuleLoader>
  );
};

export default memo(ArticlePage);
