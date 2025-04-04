import cx from 'clsx';
import {
  memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TitleSize } from '@/shared/ui/Title/Title';
import { ArticleCard, ArticleModel, ArticleType } from '@/entities/Article';
import { Button, Title, VStack } from '@/shared/ui';
import classes from './EditArticleForm.module.css';
import { articleActions, articleReducer } from '@/entities/Article/model/slices/articleSlice';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib';
import { getArticleError, getArticleIsLoading } from '@/entities/Article/model/selectors/article';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { useAddNewArticle } from '../api/articleForm';
import { articlesPageReducer } from '@/pages/articlesListPage/model/slice/articlesPageSlice';
import { getUserAuthData } from '@/entities/User';
import { Article } from '@/entities/Article/model/types/article';
import { EditArticleErrors } from './Edit/EditArticleErrors';
import { validateArticleData } from '../services/validateArticleData';
import { useAppDispatch } from '@/shared/hooks';

interface AddArticleFormProps {
  className?: string;
}

const reducers: ReducersList = {
  article: articleReducer,
  articlesPage: articlesPageReducer,
};

export const AddArticleForm = memo((props: AddArticleFormProps) => {
  const { className } = props;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation('article');
  const error = useSelector(getArticleError);
  const isLoading = useSelector(getArticleIsLoading);
  const [title, setTitle] = useState<string>('');
  const [subtitle, setSubtitle] = useState<string>('');
  const [type, setType] = useState<Array<ArticleType>>();
  const [image, setImage] = useState<string>('');
  const userData = useSelector(getUserAuthData);

  const [addNewArticleMutation] = useAddNewArticle();

  const onChangeSubtitle = useCallback((value: string) => {
    setSubtitle(value);
  }, []);

  const onChangeTitle = useCallback((value: string) => {
    setTitle(value);
  }, []);

  const onChangeImage = useCallback((value: string) => {
    setImage(value);
  }, []);

  const onChangeType = useCallback((checkedItems: { [key: string]: boolean }) => {
    const checkedValues = Object.keys(checkedItems).filter((key) => checkedItems[key]);
    setType(checkedValues as Array<ArticleType>);
  }, []);

  const onAddArticle = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const formData: ArticleModel = {
      title,
      subtitle,
      type,
      img: image,
      userId: userData?.id,
      id: '',
    };
    const errors = validateArticleData(formData);
    if (errors.length > 0) {
      dispatch(articleActions.setErrors(errors));
      return;
    }
    try {
      addNewArticleMutation(formData);
      navigate(`${RoutePath.article_list}`);
    } catch (e) {
      // handle error
      console.log(e);
    } finally {
      dispatch(articleActions.setErrors([]));
    }
  }, [addNewArticleMutation, dispatch, image, navigate, subtitle, title, type, userData?.id]);

  if (error) {
    return null;
  }

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <VStack gap="8" className={cx({ [className as string]: className, [classes.wrapper]: true })}>
        <Title title={t('Форма добавления статьи')} size={TitleSize.H3} />
        <VStack
          max
          gap="12"
          className={cx({
            [classes.card]: true,
            // [classes.editing]: !readonly,
            [className as string]: className,
          })}
        >
          <EditArticleErrors />
          <ArticleCard
            data={{} as Article}
            isLoading={isLoading}
            error={error}
            onChangeSubtitle={onChangeSubtitle}
            onChangeTitle={onChangeTitle}
            onChangeImage={onChangeImage}
            onChangeType={onChangeType}
          />
        </VStack>
        <Button type="submit" onClick={onAddArticle} className={classes.button}>{t('Добавить')}</Button>
      </VStack>
    </DynamicModuleLoader>
  );
});
