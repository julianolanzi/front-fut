import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AccountState } from "../states/account.state";


export const AccountGlobalSelector = createFeatureSelector<AccountState>('account');

const _avatarAnimationRequest = (state: AccountState) => state.avatar.AvatarAnimationRequest;
const _avatarAnimationEnabled = (state: AccountState) => state.avatar.avatarAnimationEnabled;
const _skeletonAnimation = (state: AccountState) => state.skeletonAnimation;
const _buttonLoading = (state: AccountState) => state.buttonLoading;
const _account = (state: AccountState) => state.account;


export const AvatarAnimationRequest = createSelector(AccountGlobalSelector, _avatarAnimationRequest);
export const avatarAnimationEnabled = createSelector(AccountGlobalSelector, _avatarAnimationEnabled);

export const skeletonAnimation = createSelector(AccountGlobalSelector, _skeletonAnimation);
export const buttonLoading = createSelector(AccountGlobalSelector, _buttonLoading);
export const AccountSelector = createSelector(AccountGlobalSelector, _account);
