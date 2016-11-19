
import { IOrganizationModel, IUsernameModel, IPasswordModel } from '../../../../component/account/account.module';

export interface IFormModel
    extends IOrganizationModel, IUsernameModel, IPasswordModel { }
