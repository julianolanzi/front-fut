import { createAction } from "@ngrx/store";
import { CustomAction } from "../../custom.actions";
import { GlobalMessageEnum } from "../global.message.enum";


export class LoaderEnableAction implements CustomAction<any> {
    readonly type: string = GlobalMessageEnum.LOADER_ENABLE;

    constructor(public payload?: any) { }
    createAction(): any {
        return createAction(this.type);
    }
}