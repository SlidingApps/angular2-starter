
// FOUNDATION
import { Model as FoundationModel } from '../../../foundation/model';

export class GetStartedModel extends FoundationModel {
    private _organization: string;
    public get organization(): string { return this._organization; }
    public set organization(value: string) {
        this.$setPropety('organization', value);
    }

    private _username: string;
    public get username(): string { return this._username; }
    public set username(value: string) {
        this.$setPropety('username', value);
    }

    private _password: string;
    public get password(): string { return this._password; }
    public set password(value: string) {
        this.$setPropety('password', value);
    }

    private _passwordConfirmation: string;
    public get passwordConfirmation(): string { return this._passwordConfirmation; }
    public set passwordConfirmation(value: string) {
        this.$setPropety('passwordConfirmation', value);
    }
}
