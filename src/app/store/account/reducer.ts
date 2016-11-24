
import { BehaviorSubject} from 'rxjs';
import { Actions, ActionType, IUpdateActionPayload } from './action';

/* tslint:disable:no-any */
export enum ModelState {
    NotSpecified = <any>'NotSpecified',
    Initialized = <any>'Initialized',
    Invalid = <any>'Invalid',
    Valid = <any>'Valid'
}
/* tslint:enable:no-any */

export interface IModel {
    organization: string;
    username: string;

    state: ModelState;
}

export class Model implements IModel {
    public organization$: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);
    public get organization(): string { return this.organization$.getValue(); }
    public set organization(value: string) { this.organization$.next(value); }

    public username$: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);
    public get username(): string { return this.username$.getValue(); }
    public set username(value: string) { this.username$.next(value); }

    public state$: BehaviorSubject<ModelState> = new BehaviorSubject<ModelState>(ModelState.NotSpecified);
    public get state(): ModelState { return this.state$.getValue(); }
    public set state(value: ModelState) { this.state$.next(value); }
}

export const account = (state = new Model(), action: Actions): IModel => {

    switch (action.type) {
        case ActionType.UPDATE:
            const payload: IUpdateActionPayload = action.payload as IUpdateActionPayload;
            state.organization = payload.organization;
            state.username = payload.username;
            return state;

        default:
            return state;
    }

};
