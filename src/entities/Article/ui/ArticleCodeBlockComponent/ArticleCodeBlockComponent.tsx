import cx from 'clsx';
import { memo } from 'react';
import { Code } from 'shared/ui';
import { ArticleCodeBlock } from '../../model/types/article';

import classes from './ArticleCodeBlockComponent.module.css';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock
}
export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
  const { className, block } = props;
  return (
    <div className={cx({
      [className as string]: className,
      [classes.wrapper]: true,
    })}
    >
      <Code text={block.code} />
    </div>
  );
});
