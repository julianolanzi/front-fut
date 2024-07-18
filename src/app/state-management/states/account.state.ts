import { UserSuccess } from "../../models/account/get-user/user.success";

export interface AccountState {
    account: UserSuccess;
    avatar: {
        AvatarAnimationRequest: boolean;
        avatarAnimationEnabled: boolean;
    }
    accountError?: Error;
    skeletonAnimation: boolean;
    buttonLoading: boolean;
}