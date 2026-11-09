import cx from 'clsx';
import { memo } from 'react';

import { Text, TextSize } from '@/shared/ui/Text';
import { Title, TitleSize } from '@/shared/ui/Title';
import { ArticleTextBlock } from '../../model/types/article';
import classes from './ArticleTextBlockComponent.module.css';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}
export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
  const { className, block } = props;
  return (
    <div className={cx({
      [className as string]: className,
    })}
    >
      {block.title && <Title size={TitleSize.H3} title={block.title} className={classes.title} />}
      {block.paragraphs.map((item) => <Text key={item} size={TextSize.S} text={item} className={classes.paragraph} />)}
    </div>
  );
});
