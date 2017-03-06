
export interface IState {
    user: IUserInfo;
    person: IPersonInfo;
}

export interface IAuthenticationPayload {
    user: IUserInfo;
    person: IPersonInfo;
}

export interface IUserInfo {
    username: string;
    emailAddress: string;
}

export interface IPersonInfo {
    name: string;
    firstName: string;
}

export interface ICredentials {
    username: string;
    password: string;
}
