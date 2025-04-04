import { useTranslation } from 'react-i18next';
import { memo } from 'react';

import { useParams } from 'react-router-dom';
import { EditArticleForm } from '@/features/EditArticleForm';
import { Page } from '@/widgets/Page';
import classes from './ArticleEditPage.module.css';

const ArticleEditPage = () => {
  const { t } = useTranslation('article');

  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Page className={classes.wrapper}>
      {isEdit ? (
        <p>
          {t('Edit article with id')}
          {` = ${id}`}
        </p>
      ) : <p>{t('CreateNewArticle')}</p>}
      <EditArticleForm id={id} />
    </Page>
  );
};

export default memo(ArticleEditPage);
