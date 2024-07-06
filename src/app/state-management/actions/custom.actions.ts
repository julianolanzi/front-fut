import { ActionCreator, ActionType } from "@ngrx/store";

export interface CustomAction<T> extends ActionType<any> {
    readonly type: string;

    payload?: T;

    createAction(): ActionCreator;
}