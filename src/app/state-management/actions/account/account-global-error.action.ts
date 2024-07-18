import { createAction } from "@ngrx/store";
import { CustomAction } from "../custom.actions";
import { AccountMessageEnum } from "./account.message.enum";

export class AccountGlobalError implements CustomAction<string> {
    readonly type: string = AccountMessageEnum.ACCOUNT_GLOBAL_ERROR;

    constructor(public payload?: string) { }
    createAction(): any {
        return createAction(this.type);
    }
}