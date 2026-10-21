import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleRecommendationList } from '@/features/ArticleRecommendationList';
import { Page } from '@/widgets/Page';
import { Article } from '@/entities/Article';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticlePageButtons } from '../ArticlePageButtons/ArticlePageButtons';
import { ArticlePageComments } from '../ArticlePageComments/ArticlePageComments';
import { ArticleRating } from '@/features/ArticleRating';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page>
        <VStack gap="16" max>
          <ArticlePageButtons />
          <Article id={id} />
          <ArticleRating articleId={id} />
          <ArticleRecommendationList />
          <ArticlePageComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlePage);
