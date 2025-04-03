import cx from 'clsx';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TitleSize } from '@/shared/ui/Title/Title';
import { ArticleCard, ArticleType } from '@/entities/Article';
import { Button, Title, VStack } from '@/shared/ui';
import classes from './EditArticleForm.module.css';
import { useAppDispatch, useInitialEffect } from '@/shared/hooks';
import { articleActions, articleReducer } from '@/entities/Article/model/slices/articleSlice';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib';
import {
  getArticleData, getArticleError, getArticleForm, getArticleIsLoading,
} from '@/entities/Article/model/selectors/article';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { getArticleById } from '@/entities/Article/model/services/getArticleById/getArticleById';
import { useUpdateArticle } from '../api/articleForm';

interface EditArticleFormProps {
  className?: string;
  id?: string;
}

const reducers: ReducersList = {
  article: articleReducer,
};

export const EditArticleForm = memo((props: EditArticleFormProps) => {
  const { className, id: articleId } = props;

  const navigate = useNavigate();

  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const formData = useSelector(getArticleForm);
  const article = useSelector(getArticleData);
  const error = useSelector(getArticleError);
  const isLoading = useSelector(getArticleIsLoading);

  useInitialEffect(() => {
    if (articleId) {
      dispatch(getArticleById(articleId));
    }
  });

  const [updateArticleMutation] = useUpdateArticle();

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

  const onEditArticle = useCallback((e: React.MouseEvent) => {
    try {
      updateArticleMutation({
        ...article,
        ...formData,
        id: article?.id as string,
      });
      navigate(`${RoutePath.article}${article?.id}`);
    } catch (e) {
      // handle error
      console.log(e);
    }
  }, [article, formData, navigate, updateArticleMutation]);

  if (error) {
    return null;
  }

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <VStack gap="8" className={cx({ [className as string]: className, [classes.wrapper]: true })}>
        <Title title={t('FormTitle')} size={TitleSize.H3} />
        <ArticleCard
          data={formData}
          isLoading={isLoading}
          error={error}
          onChangeSubtitle={onChangeSubtitle}
          onChangeTitle={onChangeTitle}
          onChangeImage={onChangeImage}
          onChangeType={onChangeType}
        />
        <Button type="submit" onClick={onEditArticle} className={classes.button}>{t('Submit')}</Button>
      </VStack>
    </DynamicModuleLoader>
  );
});
