import { Fragment, memo, ReactNode } from 'react';
import {
  Listbox as HListBox, ListboxButton, ListboxOption, ListboxOptions,
} from '@headlessui/react';
import { DropdownDirection } from 'shared/types';
import cx from 'clsx';

import { classNames } from 'shared/lib';
import classes from './ListBox.module.css';
import { Button } from '../Button/Button';
import { VStack } from '../Stack';

export interface ListBoxItem {
  value: string;
  name: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  items?: Array<ListBoxItem>;
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: <T extends string>(value: T) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': classes.optionsBottomLeft,
  'bottom right': classes.optionsBottomRight,
  'top right': classes.optionsTopRight,
  'top left': classes.optionsTopLeft,
};

export const ListBox = memo((props: ListBoxProps) => {
  const {
    className, items, value, defaultValue, onChange, readonly, direction = 'bottom right', label,
  } = props;

  const optionsClasses = [mapDirectionClass[direction]];

  return (
    <VStack gap="8" max>
      {label && <span className={classes.label}>{label}</span>}
      <HListBox
        as="div"
        className={cx({ [classes.listbox]: true, [className as string]: className })}
        value={value}
        onChange={onChange}
      >
        <ListboxButton as={Fragment}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </ListboxButton>
        <ListboxOptions as="ul" className={classNames(classes.list, {}, optionsClasses)}>
          {items?.map((item) => (
            <ListboxOption
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ focus, selected }) => (
                <li
                  className={cx({
                    [classes.item]: true,
                    [classes.active]: focus,
                    [classes.disabled]: item.disabled,
                    [classes.selected]: selected,
                  })}
                >
                  {item.name}
                </li>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </HListBox>
    </VStack>
  );
});
