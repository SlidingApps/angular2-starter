
// COMMON
import { BehaviorSubject } from 'rxjs';

// FOUNDATION
import { Logger } from './logger';
import { IPropertyChangedEvent } from './property-changed-event';

export interface IModel {
    $propertyChanged$: BehaviorSubject<IPropertyChangedEvent>;
}

export interface IPayload { }

export class Model implements IModel {

    private _$propertyChanged$: BehaviorSubject<IPropertyChangedEvent>;
    public get $propertyChanged$() {
        if (!this._$propertyChanged$) {
            this._$propertyChanged$ = new BehaviorSubject<IPropertyChangedEvent>(undefined);
            Logger.Debug(this.$name + '.$propertyChanged$', this, 'new');
        }
        return this._$propertyChanged$;
    }

    protected get $name(): string {
        /* tslint:disable:no-any */
        return (<any>this.constructor).name;
        /* tslint:enable:no-any */
    }

    protected $toPayload<TPayload extends IPayload>(converter: (model: Model) => TPayload): TPayload {
        Logger.Info(this.$name + '.$toPayload()', this);
        let payload: TPayload = converter(this);
        Logger.Debug(this.$name + '.$toPayload()', this, payload);

        return payload;
    }

    /* tslint:disable:no-any */
    protected $onPropertyChanged(property: string, value: any) {
        Logger.Debug(this.$name + '.$onPropertyChanged()', this, property, value);
        this.$propertyChanged$.next({ sender: this, args: { property, value }});
    }
    /* tslint:enable:no-any */

    public $destroy() {
        Logger.Info(this.$name + '.$destroy()', this);
        if (this._$propertyChanged$) { this._$propertyChanged$.complete(); }
        Logger.Debug(this.$name + '.$destroy()', this, 'done');
    }
}
