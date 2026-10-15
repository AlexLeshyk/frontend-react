import { ArticleModel, ArticleType } from '@/entities/Article';
import { ValidateArticleError } from '../consts/consts';

const isValidImageUrl = (url: string) => /\.(jpeg|jpg|gif|png|svg|webp)$/.test(url);

export const validateArticleData = (formData?: ArticleModel) => {
  const errors: Array<ValidateArticleError> = [];

  if (!formData?.title || formData.title.trim().length === 0) {
    errors.push(ValidateArticleError.EMPTY_TITLE);
  } else if (formData.title.length < 5) {
    errors.push(ValidateArticleError.TITLE_LENGTH);
  }

  if (!formData?.subtitle || formData.subtitle.trim().length === 0) {
    errors.push(ValidateArticleError.EMPTY_SUBTITLE);
  } else if (formData.subtitle.length < 10) {
    errors.push(ValidateArticleError.SUBTITLE_LENGTH);
  }

  if (!formData?.img || !isValidImageUrl(formData.img)) {
    errors.push(ValidateArticleError.IMAGE_SRC);
  }

  const validTypes = [ArticleType.IT, ArticleType.SCIENCE, ArticleType.ECONOMICS, ArticleType.ALL];
  const selectedTypes = formData?.type || [];
  const isValidType = selectedTypes.some((type) => validTypes.includes(type));

  if (!isValidType) {
    errors.push(ValidateArticleError.TYPE);
  }

  return errors;
};
