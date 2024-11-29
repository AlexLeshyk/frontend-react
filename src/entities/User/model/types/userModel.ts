export interface User {
  id: string
  userName: string
}

export interface UserModel {
  authData?: User;
  mounted: boolean;
}
