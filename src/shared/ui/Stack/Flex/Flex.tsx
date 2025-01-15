import { ReactNode } from 'react';

import { classNames } from 'shared/lib';
import { Mods } from 'shared/lib/classNames/classNames';
import classes from './Flex.module.css';

export type FlexJustify = 'start' | 'end' | 'center' | 'between';
export type FlexAlign = 'start' | 'end' | 'center';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '12' | '16' | '24' | '32';

export interface FlexProps {
  className?: string;
  children?: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  gap?: FlexGap,
  direction?: FlexDirection;
  max?: boolean;
}

const justifyClasses: Record<FlexJustify, string> = {
  start: classes.justifyStart,
  center: classes.justifyCenter,
  end: classes.justifyEnd,
  between: classes.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: classes.alignStart,
  center: classes.alignCenter,
  end: classes.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: classes.directionRow,
  column: classes.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  4: classes.gap4,
  8: classes.gap8,
  16: classes.gap16,
  32: classes.gap32,
  24: classes.gap24,
  12: classes.gap12,
};

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    align = 'center',
    justify = 'start',
    direction = 'row',
    gap,
    max,
  } = props;

  const flexClasses = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  const mods: Mods = {
    [classes.max]: max,
  };

  return (
    <div className={classNames(classes.wrapper, mods, flexClasses)}>
      {children}
    </div>
  );
};
