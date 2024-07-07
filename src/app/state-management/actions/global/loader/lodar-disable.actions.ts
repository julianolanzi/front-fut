import { createAction } from "@ngrx/store";
import { CustomAction } from "../../custom.actions";
import { GlobalMessageEnum } from "../global.message.enum";



export class LoaderDisableAction implements CustomAction<any> {
    readonly type: string = GlobalMessageEnum.LOADER_DISABLE;

    constructor(public payload?: any) { }
    createAction(): any {
        return createAction(this.type);
    }
}