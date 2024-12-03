export interface User {
  id: string
  userName: string
  avatar?: string
}

export interface UserModel {
  authData?: User;
  mounted: boolean;
}
