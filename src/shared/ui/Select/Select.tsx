import cx from 'clsx';
import { ChangeEvent, useMemo } from 'react';

import classes from './Select.module.css';

export interface SelectOptions<T extends string> {
  value: T;
  name: string;
}

interface SelectProps<T extends string> {
  label?: string;
  options?: Array<SelectOptions<T>>;
  value?: T;
  onChange?: (value: T) => void;
  className?: string;
  readonly?: boolean;
}

export const Select = <T extends string>({
  label, onChange, value, className, options, readonly,
}: SelectProps<T>) => {
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
    onChange?.(e.target.value as T);
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
};
