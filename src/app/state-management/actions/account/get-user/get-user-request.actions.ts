import { createAction } from "@ngrx/store";
import { CustomAction } from "../../custom.actions";
import { AccountMessageEnum } from "../account.message.enum";



export class GetUserRequestAction implements CustomAction<string> {
    readonly type: string = AccountMessageEnum.GET_INFO_REQUEST;

    constructor(public payload?: string) { }
    createAction(): any {
        return createAction(this.type);
    }
}