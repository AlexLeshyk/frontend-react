import cx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { TextAlign, TextTheme } from '@/shared/ui/Text/Text.model';
import {
  CheckboxGroup, Input, Select, Skeleton, Text, VStack,
} from '@/shared/ui';
import { Article } from '../../model/types/article';
import classes from './ArticleCard.module.css';
import { ArticleBlockType, ArticleType } from '../../model/consts/consts';
import { SelectOptions } from '@/shared/ui/Select/Select';
import { ArticleEditTypeBlock } from '../ArticleEditTypeBlock/ArticleEditTypeBlock';

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
  onChangeTextBlock? : (id: string, value: string, pNumber: number) => void;
  onChangeImageBlockTitle?: (id: string, value: string) => void;
  onChangeImageBlockSrc?: (id: string, value: string) => void;
  onChangeCodeBlock?: (id: string, value: string) => void;
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
    onChangeTextBlock,
    onChangeImageBlockTitle,
    onChangeImageBlockSrc,
    onChangeCodeBlock,
    readonly,
  } = props;

  const { t } = useTranslation('article');

  const blockOptions = useMemo<Array<SelectOptions<ArticleBlockType>>>(() => [
    {
      value: ArticleBlockType.CODE,
      name: t('Code'),
    },
    {
      value: ArticleBlockType.IMAGE,
      name: t('Image'),
    },
    {
      value: ArticleBlockType.TEXT,
      name: t('Text'),
    },
  ], [t]);

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
        placeholder={t('EnterTitle')}
        onChange={onChangeTitle}
        readonly={readonly}
      />
      <Input
        label={t('Subtitle')}
        htmlFor="subtitle"
        value={data?.subtitle}
        placeholder={t('EnterSubtitle')}
        onChange={onChangeSubtitle}
        readonly={readonly}
      />
      <Input
        label={t('ArticleImage')}
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
      {!isEdit && <Select options={blockOptions} label={t('Article type')} />}
      {isEdit && data?.blocks?.map((block) => (
        <ArticleEditTypeBlock
          key={block.id}
          block={block}
          readonly={readonly}
          onChangeTextBlock={onChangeTextBlock}
          onChangeImageBlockSrc={onChangeImageBlockSrc}
          onChangeImageBlockTitle={onChangeImageBlockTitle}
          onChangeCodeBlock={onChangeCodeBlock}
        />
      ))}
    </VStack>
  );
};
