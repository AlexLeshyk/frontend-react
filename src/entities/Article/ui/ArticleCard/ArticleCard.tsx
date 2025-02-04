import cx from 'clsx';
import { useTranslation } from 'react-i18next';
import {
  Input, Skeleton, Text, VStack,
} from 'shared/ui';
import { TextAlign, TextTheme } from 'shared/ui/Text/Text.model';
import { Article } from '../../model/types/article';
import classes from './ArticleCard.module.css';

interface ArticleCardProps {
  className?: string;
  data?: Article;
  error?: string;
  readonly?: boolean;
  isLoading?: boolean;
  onChangeTitle?: (value?: string) => void;
  onChangeSubtitle?: (value?: string) => void;
  onChangeImage?: (value?: string) => void;
}

export const ArticleCard = (props: ArticleCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    onChangeSubtitle,
    onChangeTitle,
    onChangeImage,
    readonly,
  } = props;

  const { t } = useTranslation('article');

  if (isLoading) {
    return (
      <VStack max gap="12">
        <Skeleton width={100} height={100} />
      </VStack>
    );
  }

  if (error) {
    return (
      <VStack
        max
        gap="12"
        align="center"
        justify="center"
        className={cx({
          [classes.card]: true,
          [classes.error]: true,
          [className as string]: className,
        })}
      >
        <Text
          align={TextAlign.CENTER}
          theme={TextTheme.ERROR}
          text={error}
        />
      </VStack>
    );
  }

  return (
    <VStack
      max
      gap="12"
      className={cx({
        [classes.card]: true,
        [classes.editing]: !readonly,
        [className as string]: className,
      })}
    >
      <Input
        label={t('Title')}
        htmlFor="title"
        value={data?.title}
        placeholder={t('Enter title')}
        onChange={onChangeTitle}
        readonly={readonly}
      />
      <Input
        label={t('Subtitle')}
        htmlFor="subtitle"
        value={data?.subtitle}
        placeholder={t('Enter subtitle')}
        onChange={onChangeSubtitle}
        readonly={readonly}
      />
      <Input
        label={t('Image')}
        htmlFor="articleImage"
        value={data?.img}
        placeholder={t('Enter image src')}
        onChange={onChangeImage}
        readonly={readonly}
      />
    </VStack>
  );
};
