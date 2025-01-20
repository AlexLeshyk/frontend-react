import {
  Menu, MenuButton, MenuItem, MenuItems,
} from '@headlessui/react';
import cx from 'clsx';

import { Fragment } from 'react/jsx-runtime';
import { ReactNode } from 'react';
import classes from './Dropdown.module.css';
import { LinkComponent } from '../LinkComponent/LinkComponent';

export interface DropdownItem {
  onClick?: () => void;
  content?: ReactNode;
  disabled?: boolean;
  href?: string;
}

interface DropdownProps {
  className?: string;
  trigger: ReactNode;
  items: Array<DropdownItem>;
}

export const Dropdown = (props: DropdownProps) => {
  const { className, trigger, items } = props;
  return (
    <Menu as="div" className={cx({ [classes.dropdown]: true, [className as string]: className })}>
      <MenuButton className={classes.button}>{trigger}</MenuButton>
      <MenuItems anchor="bottom end" className={classes.menu}>
        {items.map((item) => {
          const {
            disabled, content, onClick, href,
          } = item;

          const itemContent = ({ focus }: {focus: boolean}) => (
            <button
              className={cx({
                [classes.item]: true,
                [classes.active]: focus,
              })}
              onClick={onClick}
              type="button"
            >
              {content}
            </button>
          );

          return href ? (
            <MenuItem as={LinkComponent} to={href} disabled={disabled}>
              {itemContent}
            </MenuItem>
          ) : (
            <MenuItem as={Fragment} disabled={disabled}>
              {itemContent}
            </MenuItem>
          );
        })}

      </MenuItems>
    </Menu>
  );
};
