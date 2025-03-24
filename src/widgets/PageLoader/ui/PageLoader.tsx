import { Loader } from '@/shared/ui';
import classes from './PageLoader.module.css';

export const PageLoader = () => (
  <div className={classes.pageLoader}>
    <Loader />
  </div>
);
