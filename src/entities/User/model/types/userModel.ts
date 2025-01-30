export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  MANAGER = 'MANAGER',
}

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: Array<UserRole>
}

export interface UserModel {
  authData?: User;
  mounted: boolean;
}
