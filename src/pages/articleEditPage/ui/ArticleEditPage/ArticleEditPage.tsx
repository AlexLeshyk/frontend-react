import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
import { memo } from 'react';

import { useParams } from 'react-router-dom';
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
    </Page>
  );
};

export default memo(ArticleEditPage);
