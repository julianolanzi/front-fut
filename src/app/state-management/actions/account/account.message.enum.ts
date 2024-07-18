export enum AccountMessageEnum {
    AVATAR_RESQUEST = '[ACCOUNT] Avatar request',
    AVATAR_SUCCESS = '[ACCOUNT] Avatar success',

    UPDATE_INFO_REQUEST = '[ACCOUNT] Update profile request',
    UPDATE_INFO_SUCCESS = '[ACCOUNT] Update profile success',

    UPDATE_PASSWORD_REQUEST = '[ACCOUNT] Update profile password request',
    UPDATE_PASSWORD_SUCCESS = '[ACCOUNT] Update profile password success',

    GET_INFO_REQUEST = '[ACCOUNT] Get profile request',
    GET_INFO_SUCCESS = '[ACCOUNT] Get profile success',

    GET_NOTIFICATIONS_REQUEST = '[ACCOUNT] Get notifications request',
    GET_NOTIFICATIONS_SUCCESS = '[ACCOUNT] Get notifications success',


    ACCOUNT_GLOBAL_ERROR = '[ACCOUNT] Auth global error',
}