import cx from 'clsx';
import { memo, useCallback } from 'react';
import CopyIcon from '@/shared/icons/copy.svg';
import classes from './Code.module.css';
import { ButtonTheme } from '../Button/Button.model';
import { Button } from '../Button/Button';

interface CodeProps {
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const { text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={cx({
      [classes.code]: true,
    })}
    >
      <Button onClick={onCopy} className={classes.copyBtn} theme={ButtonTheme.CLEAR}>
        <CopyIcon className={classes.copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
