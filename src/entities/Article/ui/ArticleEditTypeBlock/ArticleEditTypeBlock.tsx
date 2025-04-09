import { useTranslation } from 'react-i18next';
import { Input, VStack } from '@/shared/ui';
import { ArticleBlockType } from '../../model/consts/consts';
import classes from './ArticleEditTypeBlock.module.css';
import { ArticleBlock } from '../../model/types/article';
import { Textarea } from '@/shared/ui/Textarea/Textarea';

interface ArticleEditTypeBlockProps {
  block: ArticleBlock;
  readonly?: boolean;
  onChangeTextBlock?: (id: string, value: string, pNumber: number) => void;
  onChangeImageBlockSrc?: (id: string, value: string) => void;
  onChangeImageBlockTitle?: (id: string, value: string) => void;
  onChangeCodeBlock?: (id: string, value: string) => void;
}

export const ArticleEditTypeBlock = ({
  block,
  readonly,
  onChangeTextBlock,
  onChangeImageBlockSrc,
  onChangeImageBlockTitle,
  onChangeCodeBlock,
}: ArticleEditTypeBlockProps) => {
  const { t } = useTranslation('article');

  return (
    <VStack key={block.id} className={classes.wrapper} gap="8">
      {block.type === ArticleBlockType.TEXT && (
        <>
          {block.paragraphs.map((paragraph: string, index: number) => (
            <Textarea
              // eslint-disable-next-line react/no-array-index-key
              key={`${block.id}-${index}`}
              label={t('Text')}
              htmlFor={`textBlock-${index}`}
              value={paragraph}
              placeholder={t('Enter text')}
              onChange={(value) => onChangeTextBlock?.(block.id, value, index)}
              readonly={readonly}
              rows={5}
            />
          ))}
        </>
      )}
      {block.type === ArticleBlockType.IMAGE && (
        <>
          <Input
            label={t('Image src')}
            htmlFor="imageBlockSrc"
            value={block.src}
            placeholder={t('Enter image src')}
            onChange={(value) => onChangeImageBlockSrc?.(block.id, value)}
            readonly={readonly}
          />
          <Input
            label={t('Image title')}
            htmlFor="imageBlockTitle"
            value={block.title}
            placeholder={t('Enter image block title')}
            onChange={(value) => onChangeImageBlockTitle?.(block.id, value)}
            readonly={readonly}
          />
        </>
      )}
      {block.type === ArticleBlockType.CODE && (
        <Input
          label={t('Code block')}
          htmlFor="codeBlock"
          value={block.code}
          placeholder={t('Enter code block')}
          onChange={(value) => onChangeCodeBlock?.(block.id, value)}
          readonly={readonly}
        />
      )}
    </VStack>
  );
};
