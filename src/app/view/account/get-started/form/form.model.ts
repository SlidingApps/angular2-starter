
import { ITenantModel, IUsernameModel, IPasswordModel, IPasswordConfirmationModel } from '../../../../component/account/account-component.module';

export interface IFormModel
    extends ITenantModel, IUsernameModel, IPasswordModel, IPasswordConfirmationModel { }
