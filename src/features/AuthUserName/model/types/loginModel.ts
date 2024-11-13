export interface LoginModel {
  userName: string;
  password: string;
  error?: string;
  isLoading: boolean;
  lastName?: string;
  rememberMe?: boolean;
}
