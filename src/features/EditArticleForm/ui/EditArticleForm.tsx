import cx from 'clsx';
import { memo, useCallback } from 'react';
import { Button, Title, VStack } from 'shared/ui';
import { TitleSize } from 'shared/ui/Title/Title';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { ArticleCard, ArticleModel } from 'entities/Article';
import { useGetArticleById, useUpdateArticle } from '../api/getArticleById';
import classes from './EditArticleForm.module.css';

interface EditArticleFormProps {
  className?: string;
  id?: string;
}

export const EditArticleForm = memo((props: EditArticleFormProps) => {
  const { className, id: articleId } = props;

  const { t } = useTranslation('article');
  const userData = useSelector(getUserAuthData);
  const {
    data: article,
    isLoading, error,
  } = useGetArticleById({ articleId: articleId ?? '', userId: userData?.id ?? '' });

  const [updateArticleMutation] = useUpdateArticle();

  const onChangeSubtitle = (value?: string) => {
    console.log('value', value);
  };

  const onSubmitButton = useCallback((e: React.MouseEvent) => {
    try {
      updateArticleMutation({
        ...article as ArticleModel,
        title: 'Phyton good',
      });
    } catch (e) {
      // handle error
      console.log(e);
    }
  }, [article, updateArticleMutation]);

  if (error || !article) {
    return null;
  }

  console.log('article', article);

  return (
    <VStack gap="8" className={cx({ [className as string]: className, [classes.wrapper]: true })}>
      <Title title={t('Form')} size={TitleSize.H3} />
      <ArticleCard
        data={article}
        isLoading={isLoading}
        error={error}
        onChangeSubtitle={onChangeSubtitle}
        // onChangeTitle={onChangeTitle}
        // onChangeImage={onChangeImage}
        // readonly={false}
      />
      <Button type="submit" onClick={onSubmitButton}>{t('Submit')}</Button>
    </VStack>
  );
});
