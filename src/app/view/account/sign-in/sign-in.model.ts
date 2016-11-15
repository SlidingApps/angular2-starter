
// FOUNDATION
import { Model as FoundationModel } from '../../../foundation/model';
import { ISignInFormModel } from './form/form.model';

export class SignInModel extends FoundationModel implements ISignInFormModel {
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
}
