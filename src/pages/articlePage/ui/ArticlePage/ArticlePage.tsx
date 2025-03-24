import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleRecommendationList } from '@/features/ArticleRecommendationList';
import { Page } from '@/widgets/Page';
import { Article } from '@/entities/Article';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticlePageButtons } from '../ArticlePageButtons/ArticlePageButtons';
import { ArticlePageComments } from '../ArticlePageComments/ArticlePageComments';

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page>
        <ArticlePageButtons />
        <Article id={id} />
        <ArticleRecommendationList />
        <ArticlePageComments id={id} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlePage);
