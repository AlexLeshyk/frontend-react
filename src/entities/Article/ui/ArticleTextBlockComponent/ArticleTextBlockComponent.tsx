import cx from 'clsx';
import { memo } from 'react';
import { Title, Text } from 'shared/ui';

import { TitleSize } from 'shared/ui/Title/Title';
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
      {block.paragraphs.map((item) => <Text key={item} text={item} className={classes.paragraph} />)}
    </div>
  );
});
