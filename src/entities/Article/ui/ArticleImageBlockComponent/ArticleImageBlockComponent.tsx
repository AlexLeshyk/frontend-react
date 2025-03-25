import cx from 'clsx';
import { memo } from 'react';
import { TextAlign } from '@/shared/ui/Text/Text.model';
import { Text } from '@/shared/ui';
import { ArticleImageBlock } from '../../model/types/article';

import classes from './ArticleImageBlockComponent.module.css';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock
}
export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const { className, block } = props;
  return (
    <div className={cx({
      [className as string]: className,
    })}
    >
      <img src={block.src} alt={block.title} className={classes.image} />
      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </div>
  );
});
