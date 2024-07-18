import { createAction } from "@ngrx/store";
import { UserSuccess } from "../../../../models/account/get-user/user.success";
import { CustomAction } from "../../custom.actions";
import { AccountMessageEnum } from "../account.message.enum";

export class GetUserSuccessAction implements CustomAction<UserSuccess> {
    readonly type: string = AccountMessageEnum.GET_INFO_SUCCESS;

    constructor(public payload?: UserSuccess) { }
    createAction(): any {
        return createAction(this.type);
    }
}