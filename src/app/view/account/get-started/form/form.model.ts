
import { IOrganizationModel, IUsernameModel, IPasswordModel, IPasswordConfirmationModel } from '../../../../component/account/account.module';

export interface IFormModel
    extends IOrganizationModel, IUsernameModel, IPasswordModel, IPasswordConfirmationModel { }
