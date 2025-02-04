import { Popover as HPopover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ReactNode } from 'react';
import cx from 'clsx';

import classes from './Popover.module.css';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    children: ReactNode;
}

export const Popover = (props: PopoverProps) => {
  const { className, trigger, children } = props;

  return (
    <HPopover className={cx({ [classes.popup]: true, [className as string]: className })}>
      <PopoverButton
        as="div"
        className={classes.trigger}
      >
        {trigger}
      </PopoverButton>
      <PopoverPanel
        className={classes.panel}
        anchor="bottom end"
        transition
      >
        {children}
      </PopoverPanel>
    </HPopover>
  );
};
