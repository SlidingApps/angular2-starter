
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
            Logger.LOG.debug(this.$name, '$propertyChanged$ instantiated', this);
            this._$propertyChanged$ = new BehaviorSubject<IPropertyChangedEvent>(undefined);
        }
        return this._$propertyChanged$;
    }

    protected get $name(): string {
        /* tslint:disable:no-any */
        return (<any>this.constructor).name;
        /* tslint:enable:no-any */
    }

    protected $toPayload<TPayload extends IPayload>(converter: (model: Model) => TPayload): TPayload {
        Logger.LOG.info(this.$name, '$toPayload invoked', this);
        let payload: TPayload = converter(this);
        Logger.LOG.debug(this.$name, '$toPayload done', payload);

        return payload;
    }

    protected $onPropertyChanged(property: string, value: any) {
        Logger.LOG.debug(this.$name, property, value);
        this.$propertyChanged$.next({ sender: this, args: { property, value }});
    }

    public $destroy() {
        Logger.LOG.info(this.$name, '$destroy invoked', this);
        if (this._$propertyChanged$) { this._$propertyChanged$.complete(); }
        Logger.LOG.debug(this.$name, '$destroy done', this);
    }
}
