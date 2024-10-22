import classes from './Loader.module.css';

export const Loader = () => (
  <div className={classes['lds-ellipsis']}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
