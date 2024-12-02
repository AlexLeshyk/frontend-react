import { Article } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
  const { t } = useTranslation('article');

  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div>
        {t('ArticleNotFound')}
      </div>
    );
  }

  return (
    <>
      {/* <div>{t('ArticlePage')}</div> */}
      <Article id={id} />
    </>
  );
};

export default memo(ArticlePage);
