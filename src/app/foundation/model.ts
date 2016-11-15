
// COMMON
import { BehaviorSubject } from 'rxjs';

// FOUNDATION
import { ApplicationConfig } from '../application/application.config';
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
            Logger.Sinks[ApplicationConfig.MODEL_SINK_NAME].Debug(this.$name + '.$propertyChanged$', this, 'new');
            this._$propertyChanged$ = new BehaviorSubject<IPropertyChangedEvent>(undefined);
            Logger.Sinks[ApplicationConfig.MODEL_SINK_NAME].Debug(this.$name + '.$propertyChanged$', this, 'new', 'done');
        }

        return this._$propertyChanged$;
    }

    protected get $name(): string {
        /* tslint:disable:no-any */
        return (<any>this.constructor).name;
        /* tslint:enable:no-any */
    }

    protected $toPayload<TPayload extends IPayload>(converter: (model: Model) => TPayload): TPayload {
        Logger.Sinks[ApplicationConfig.MODEL_SINK_NAME].Info(this.$name + '.$toPayload()', this);
        let payload: TPayload = converter(this);
        Logger.Sinks[ApplicationConfig.MODEL_SINK_NAME].Debug(this.$name + '.$toPayload()', this, payload, 'done');

        return payload;
    }

    protected $setPropety<TType>(name: string, value: TType) {
        const isChanged: boolean = this['_' + name] !== value;

        if (isChanged) {
            Logger.Sinks[ApplicationConfig.MODEL_SINK_NAME].Info(this.$name + '.$setPropety()', this, name, value);
            this['_' + name] = value;
            Logger.Sinks[ApplicationConfig.MODEL_SINK_NAME].Debug(this.$name + '.$setPropety()', this, name, this['_' + name], 'done');
            if (isChanged) {
                this.$onPropertyChanged(name, value);
            }
        }
    }

    /* tslint:disable:no-any */
    protected $onPropertyChanged(property: string, value: any) {
        Logger.Sinks[ApplicationConfig.MODEL_SINK_NAME].Debug(this.$name + '.$onPropertyChanged()', this, property, value);
        this.$propertyChanged$.next({ sender: this, args: { property, value }});
        Logger.Sinks[ApplicationConfig.MODEL_SINK_NAME].Debug(this.$name + '.$onPropertyChanged()', this, property, value, 'done');
    }
    /* tslint:enable:no-any */

    public $destroy() {
        Logger.Sinks[ApplicationConfig.MODEL_SINK_NAME].Info(this.$name + '.$destroy()', this);
        if (this._$propertyChanged$) { this._$propertyChanged$.complete(); }
        Logger.Sinks[ApplicationConfig.MODEL_SINK_NAME].Debug(this.$name + '.$destroy()', this, 'done');
    }
}
