import { createAction } from "@ngrx/store";
import { Login } from "../../../../models/authentication/auth/login";
import { CustomAction } from "../../custom.actions";
import { AuthMessageEnum } from "../auth.message.enum";



export class AuthRequest implements CustomAction<Login> {
    readonly type: string = AuthMessageEnum.AUTH_RESQUEST;

    constructor(public payload?: Login) { }
    createAction(): any {
        return createAction(this.type);
    }
}