import cx from 'clsx';
import { memo } from 'react';
import { Button, Title, VStack } from 'shared/ui';
import { TitleSize } from 'shared/ui/Title/Title';
import { useTranslation } from 'react-i18next';

import { useGetArticleById } from '../api/getArticleById';
import classes from './EditArticleForm.module.css';

interface EditArticleFormProps {
  className?: string;
  id?: string;
}

export const EditArticleForm = memo((props: EditArticleFormProps) => {
  const { className, id } = props;

  const { t } = useTranslation('article');

  const { data: article, isLoading, error } = useGetArticleById(id as string);

  if (error || !article) {
    return null;
  }

  console.log('article', article);

  const onSubmitButton = (e: React.MouseEvent) => {
    console.log('Submit');
  };

  return (
    <VStack gap="8" className={cx({ [className as string]: className, [classes.wrapper]: true })}>
      <Title title={t('Form')} size={TitleSize.H3} />
      <Button type="submit" onClick={onSubmitButton}>{t('Submit')}</Button>
    </VStack>
  );
});
