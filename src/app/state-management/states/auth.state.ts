import { LoginSuccess } from "../../models/authentication/auth/login-sucess";

export interface AuthState {
 
  user: LoginSuccess;
  token: string;
  authError?: Error;
  loading: boolean;
  isRequestLogin: boolean;
  animationEnabled: boolean;
}