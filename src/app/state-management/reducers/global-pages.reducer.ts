import { Action, createReducer, on } from "@ngrx/store";
import { AuthSuccess } from "../actions/authentication/auth/auth-success.actions";
import { RefreshTokenSuccess } from "../actions/authentication/refresh-token/refresh-token-success.actions";
import { LoaderDisableAction } from "../actions/global/loader/lodar-disable.actions";
import { LoaderEnableAction } from "../actions/global/loader/lodar-enable.actions";
import { GlobalPageState } from "../states/global-pages.state";


export const initialState: GlobalPageState = {

    isloading: false,
    url: '',
    plan: '',
};

const _globalPagesReducer = createReducer(
    initialState,
    on(new LoaderEnableAction().createAction(), (state) => ({
        ...state,
        isloading: true,
    })),
    on(new LoaderDisableAction().createAction(), (state) => ({
        ...state,
        isloading: false,
    })),



    on(new RefreshTokenSuccess().createAction(), (state, action) => ({
        ...state,
        url: action.payload.url,
        plan: action.payload.permission.plan,

    })),



    on(new AuthSuccess().createAction(), (state, action) => ({
        ...state,
        url: action.payload.url,
        plan: action.payload.permission.plan,

    })),






);

export function globalPagesReducer(state: any, action: Action) {
    return _globalPagesReducer(state, action);
}
