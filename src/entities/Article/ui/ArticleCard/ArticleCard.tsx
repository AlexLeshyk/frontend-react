import cx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { TextAlign, TextTheme } from '@/shared/ui/Text/Text.model';
import {
  CheckboxGroup,
  Input, Skeleton, Text, VStack,
} from '@/shared/ui';
import { Article } from '../../model/types/article';
import classes from './ArticleCard.module.css';
import { ArticleType } from '../../model/consts/consts';

interface ArticleCardProps {
  className?: string;
  data?: Article;
  error?: string;
  readonly?: boolean;
  isLoading?: boolean;
  onChangeTitle?: (value: string) => void;
  onChangeSubtitle?: (value: string) => void;
  onChangeImage?: (value: string) => void;
  onChangeType?: (checkedItems: { [key in string]: boolean }) => void;
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
    onChangeType,
    readonly,
  } = props;

  const { t } = useTranslation('article');

  const checkboxOptions = useMemo<Array<ArticleType>>(() => [
    ArticleType.IT, ArticleType.SCIENCE, ArticleType.ECONOMICS, ArticleType.ALL,
  ], []);

  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  if (isLoading) {
    return (
      <VStack max gap="12">
        <Skeleton width="100%" height={100} />
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
      <div>
        {isEdit
          && (data?.type && data.type.length > 0
            ? (
              <>
                <Text text={t('Current type')} />
                {data.type.map((item) => <span className={classes.type} key={item}>{item}</span>)}
              </>
            ) : (<Text text={t('No type selected')} />)
          )}
      </div>
      <CheckboxGroup options={checkboxOptions} onChangeCheckbox={onChangeType} readonly={readonly} />
    </VStack>
  );
};
