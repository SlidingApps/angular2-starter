
import { IUsernameModel } from './username.model';
import { IPasswordModel } from './password.model';

export interface ISignInFormModel extends
    IUsernameModel,
    IPasswordModel {
}
