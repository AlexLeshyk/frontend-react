import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getArticleValidateErrors } from '@/entities/Article/model/selectors/article';
import { TextSize } from '@/shared/ui/Text/Text';
import { TextTheme } from '@/shared/ui/Text/Text.model';
import { ValidateArticleError } from '../../consts/consts';
import { Text } from '@/shared/ui';

export const EditArticleErrors = () => {
  const { t } = useTranslation('article');
  const validateErrors = useSelector(getArticleValidateErrors);

  const validateErrorsTranslates = useMemo(() => ({
    [ValidateArticleError.EMPTY_SUBTITLE]: t('EmptySubtitle'),
    [ValidateArticleError.EMPTY_TITLE]: t('EmptyTitle'),
    [ValidateArticleError.SUBTITLE_LENGTH]: t('SubtitleLength'),
    [ValidateArticleError.TITLE_LENGTH]: t('TitleLength'),
    [ValidateArticleError.NO_DATA]: t('No_Data'),
    [ValidateArticleError.SERVER_ERROR]: t('Server_Error'),
    [ValidateArticleError.IMAGE_SRC]: t('ImageSrc'),
    [ValidateArticleError.TYPE]: t('ShouldBeType'),
  }), [t]);
  if (validateErrors?.length === 0) {
    return null;
  }
  return (
    validateErrors?.map((err) => (
      <Text
        key={err}
        theme={TextTheme.ERROR}
        text={validateErrorsTranslates[err]}
        size={TextSize.XS}
      />
    ))
  );
};
