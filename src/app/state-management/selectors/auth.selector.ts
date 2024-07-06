import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../states/auth.state";

export const AuthGlobalSelector = createFeatureSelector<AuthState>('auth');

const _auth = (state: AuthState) => state.user;
const _isLoadingAuth = (state: AuthState) => state.loading;




export const AuthSelector = createSelector(AuthGlobalSelector, _auth);
export const isloadingAuth = createSelector(AuthGlobalSelector, _isLoadingAuth);

