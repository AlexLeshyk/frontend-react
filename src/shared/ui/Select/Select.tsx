import cx from 'clsx';
import { ChangeEvent, memo, useMemo } from 'react';

import classes from './Select.module.css';

export interface SelectOptions {
  value: string;
  name: string;
}

interface SelectProps {
  label?: string;
  options?: Array<SelectOptions>;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  readonly?: boolean;
}

export const Select = memo(({
  label, onChange, value, className, options, readonly,
}: SelectProps) => {
  const optionsList = useMemo(() => options?.map((item) => (
    <option
      key={item.value}
      className={classes.option}
      value={item.value}
    >
      {item.name}
    </option>
  )), [options]);

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div
      className={cx({
        [classes.wrapper]: true,
        [className as string]: className,
      })}
    >
      {label && (
        <span className={cx({ [classes.label]: true, [classes.labelReadOnly]: readonly })}>
          {label}
        </span>
      )}
      <select className={classes.select} value={value} onChange={onChangeSelect} disabled={readonly}>
        {optionsList}
      </select>
    </div>
  );
});
