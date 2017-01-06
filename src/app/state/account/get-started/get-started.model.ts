
export interface ITenantInfo {
    code: string;
}

export interface IWithPasswordConfirmation {
    passwordConfirmation: string;
}

export interface IUserInfo {
    username: string;
    password: string;
}

export interface IUserInfoWithPasswordConfirmation extends IUserInfo, IWithPasswordConfirmation {
}

export interface IUpdatePayload {
    tenant: ITenantInfo;
    user: IUserInfoWithPasswordConfirmation;
}

export interface ISignUpPayload {
    tenant: ITenantInfo;
    user: IUserInfo;
}
