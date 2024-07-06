import { createAction } from "@ngrx/store";
import { CustomAction } from "../../custom.actions";
import { AuthMessageEnum } from "../auth.message.enum";

export class RefreshToken implements CustomAction<string> {
    readonly type: string = AuthMessageEnum.REFRESH_TOKEN_REQUEST;

    constructor(public payload?: string) { }
    createAction(): any {
        return createAction(this.type);
    }
}