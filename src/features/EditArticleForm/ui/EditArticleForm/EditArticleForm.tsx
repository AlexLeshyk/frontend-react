import cx from 'clsx';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
  ArticleBlockType, ArticleCard, ArticleTextBlock, ArticleType,
} from '@/entities/Article';
import { VStack } from '@/shared/ui';
import classes from './EditArticleForm.module.css';
import { useAppDispatch, useInitialEffect } from '@/shared/hooks';
import { articleActions, articleReducer } from '@/entities/Article/model/slices/articleSlice';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib';
import {
  getArticleData, getArticleError, getArticleForm, getArticleIsLoading,
  getArticleReadonly,
} from '@/entities/Article/model/selectors/article';
import { getArticleById } from '@/entities/Article/model/services/getArticleById/getArticleById';
import EditableArticleCardHeader from '../EditableArticleCardHeader/EditableArticleCardHeader';
import { EditArticleErrors } from '../Edit/EditArticleErrors';

interface EditArticleFormProps {
  className?: string;
  id?: string;
}

const reducers: ReducersList = {
  article: articleReducer,
};

export const EditArticleForm = memo((props: EditArticleFormProps) => {
  const { className, id: articleId } = props;

  const dispatch = useAppDispatch();
  const formData = useSelector(getArticleForm);
  const article = useSelector(getArticleData);
  const error = useSelector(getArticleError);
  const isLoading = useSelector(getArticleIsLoading);
  const readonly = useSelector(getArticleReadonly);

  useInitialEffect(() => {
    if (articleId) {
      dispatch(getArticleById(articleId));
    }
  });

  const onChangeSubtitle = useCallback((value?: string) => {
    dispatch(articleActions.updateArticle({
      subtitle: value,
      id: article?.id as string,
    }));
  }, [article?.id, dispatch]);

  const onChangeTitle = useCallback((value?: string) => {
    dispatch(articleActions.updateArticle({
      title: value,
      id: article?.id as string,
    }));
  }, [article?.id, dispatch]);

  const onChangeImage = useCallback((value?: string) => {
    dispatch(articleActions.updateArticle({
      img: value,
      id: article?.id as string,
    }));
  }, [article?.id, dispatch]);

  const onChangeType = useCallback((checkedItems: { [key: string]: boolean }) => {
    const checkedValues = Object.keys(checkedItems).filter((key) => checkedItems[key]);
    dispatch(articleActions.updateArticle({
      type: checkedValues as Array<ArticleType>,
      id: article?.id as string,
    }));
  }, [article?.id, dispatch]);

  const onChangeTextBlock = (id: string, value: string, pNumber: number) => {
    dispatch(articleActions.updateArticle({
      id: article?.id as string,
      blocks: formData?.blocks?.map((block) => {
        if (block.id === id) {
          if (block.type === ArticleBlockType.TEXT) {
            return {
              ...block,
              paragraphs: block.paragraphs.map((item: string, index: number) => ((index === pNumber) ? value : item)),
            };
          }
          return block;
        }
        return block;
      }),
    }));
  };

  const onChangeCodeBlock = useCallback((id: string, value: string) => {
    dispatch(articleActions.updateArticle({
      blocks: formData?.blocks?.map((block) => {
        if (block.id === id) {
          return {
            ...block,
            code: value,
          };
        }
        return block;
      }),
      id: article?.id as string,
    }));
  }, [article?.id, dispatch, formData?.blocks]);

  const onChangeImageBlockTitle = useCallback((id: string, value: string) => {
    dispatch(articleActions.updateArticle({
      blocks: formData?.blocks?.map((block) => {
        if (block.id === id) {
          return {
            ...block,
            title: value,
          };
        }
        return block;
      }),
      id: article?.id as string,
    }));
  }, [article?.id, dispatch, formData?.blocks]);

  const onChangeImageBlockSrc = useCallback((id: string, value: string) => {
    dispatch(articleActions.updateArticle({
      blocks: formData?.blocks?.map((block) => {
        if (block.id === id) {
          return {
            ...block,
            src: value,
          };
        }
        return block;
      }),
      id: article?.id as string,
    }));
  }, [article?.id, dispatch, formData?.blocks]);

  if (error) {
    return null;
  }

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <VStack gap="4" className={cx({ [className as string]: className, [classes.wrapper]: true })}>
        <EditableArticleCardHeader />
        <EditArticleErrors />
        <ArticleCard
          data={formData}
          isLoading={isLoading}
          error={error}
          onChangeSubtitle={onChangeSubtitle}
          onChangeTitle={onChangeTitle}
          onChangeImage={onChangeImage}
          onChangeType={onChangeType}
          onChangeTextBlock={onChangeTextBlock}
          onChangeImageBlockTitle={onChangeImageBlockTitle}
          onChangeImageBlockSrc={onChangeImageBlockSrc}
          onChangeCodeBlock={onChangeCodeBlock}
          readonly={readonly}
        />
      </VStack>
    </DynamicModuleLoader>
  );
});
