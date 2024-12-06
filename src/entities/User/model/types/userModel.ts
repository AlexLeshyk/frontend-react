export interface User {
  id: string
  username: string
  avatar?: string
}

export interface UserModel {
  authData?: User;
  mounted: boolean;
}
