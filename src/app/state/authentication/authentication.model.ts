
export interface IState {
    user: IUserInfo;
    account: IAccountInfo;
}

export interface IAuthenticationPayload {
    user: IUserInfo;
    account: IAccountInfo;
}

export interface IUserInfo {
    id: string;
    username: string;
}

export interface IAccountInfo {
    name: string;
    firstName: string;
}

export interface ICredentials {
    username: string;
    password: string;
}
