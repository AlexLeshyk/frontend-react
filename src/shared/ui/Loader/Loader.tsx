import { memo } from 'react';
import classes from './Loader.module.css';

export const Loader = memo(() => (
  <div className={classes['lds-ellipsis']}>
    <div />
    <div />
    <div />
    <div />
  </div>
));
