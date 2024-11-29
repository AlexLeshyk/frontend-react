import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return <div>{t('About')}</div>;
};

export default memo(AboutPage);
