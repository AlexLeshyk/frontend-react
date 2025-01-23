import { Article } from 'entities/Article';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from 'shared/lib';
import { Page } from 'widgets/Page';
import { ArticleRecommendationList } from 'features/ArticleRecommendationList';
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
        <Article id={id as string} />
        <ArticleRecommendationList />
        <ArticlePageComments id={id} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlePage);
