import { Action, createReducer, on } from "@ngrx/store";


import { GetUserRequestAction } from "../actions/account/get-user/get-user-request.actions";
import { GetUserSuccessAction } from "../actions/account/get-user/get-user-success.actions";
import { AccountState } from "../states/account.state";

export const initialState: AccountState = {
    account: {
        _id: '',
        apelido: '',
        name: '',
        birthday: '',
        url: '',
        phone: '',
        country: '',
        email: '',
        createdAt: '',

    },
    accountError: undefined,
    avatar: {
        AvatarAnimationRequest: true,
        avatarAnimationEnabled: false,
    },
    skeletonAnimation: false,
    buttonLoading: false,
};

const _accountReducer = createReducer(
    initialState,



    on(new GetUserSuccessAction().createAction(), (state, action) => ({
        ...state,
        account: action.payload,
        skeletonAnimation: false,
    })),
    on(new GetUserRequestAction().createAction(), (state) => ({
        ...state,
        skeletonAnimation: true,
    })),





);

export function accountReducer(state: any, action: Action) {
    return _accountReducer(state, action);
}