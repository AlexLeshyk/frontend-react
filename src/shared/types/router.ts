import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line
import { UserRole } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: Array<UserRole>;
}
