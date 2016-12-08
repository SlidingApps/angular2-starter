
import { ITenantModel, IUsernameModel, IPasswordModel, IPasswordConfirmationModel } from '../../../../component/account/account.module';

export interface IFormModel
    extends ITenantModel, IUsernameModel, IPasswordModel, IPasswordConfirmationModel { }
