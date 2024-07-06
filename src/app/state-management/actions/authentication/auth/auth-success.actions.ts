import { createAction } from "@ngrx/store";
import { LoginSuccess } from "../../../../models/authentication/auth/login-sucess";
import { CustomAction } from "../../custom.actions";
import { AuthMessageEnum } from "../auth.message.enum";



export class AuthSuccess implements CustomAction<LoginSuccess> {
    readonly type: string = AuthMessageEnum.AUTH_SUCCESS;

    constructor(public payload?: LoginSuccess) { }
    createAction(): any {
        return createAction(this.type);
    }
}