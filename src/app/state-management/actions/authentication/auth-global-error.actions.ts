import { createAction } from "@ngrx/store";
import { CustomAction } from "../custom.actions";
import { AuthMessageEnum } from "./auth.message.enum";



export class authGlobalError implements CustomAction<string> {
    readonly type: string = AuthMessageEnum.AUTH_GLOBAL_ERROR;

    constructor(public payload?: string) { }
    createAction(): any {
        return createAction(this.type);
    }
}