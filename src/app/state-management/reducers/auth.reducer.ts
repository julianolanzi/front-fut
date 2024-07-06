import { Action, createReducer, on } from "@ngrx/store";
import { authGlobalError } from "../actions/authentication/auth-global-error.actions";
import { AuthRequest } from "../actions/authentication/auth/auth-request.actions";
import { AuthSuccess } from "../actions/authentication/auth/auth-success.actions";
import { AuthState } from "../states/auth.state";


export const initialState: AuthState = {
  user: {
    _id: '',
    email: '',
    token: '',
    apelido: '',
    url: '',
    permission: {
      roles: '',
      plan: '',
      roleTeam: '',
    }
  },
  token: '',
  authError: undefined,
  loading: false,
  isRequestLogin: true,
  animationEnabled: true,
};


const _authReducer = createReducer(
  initialState,

  on(new AuthSuccess().createAction(), (state, action) => ({
    ...state,
    user: { ...action.payload },
    token: action.payload.token,
    authError: undefined,
    loading: false,
    isRequestLogin: true,
    animationEnabled: false,
  })),
  on(new AuthRequest().createAction(), (state) => ({
    ...state,
    authError: undefined,
    loading: true,
    isRequestLogin: false,
    animationEnabled: false,
  })),

  on(new authGlobalError().createAction(), (state, action) => ({
    ...state,
    authError: action.payload,
    loading: false,
    isRequestLogin: true,
    animationEnabled: false,
  })),

);

export function authReducer(state: any, action: Action) {
  return _authReducer(state, action);
}