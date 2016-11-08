
import { IEvent, IEventArgs } from './event';
import { IModel } from './model';

export interface IPropertyChangedEvent extends IEvent<IModel, IPropertyChangedEventArgs> { }

export interface IPropertyChangedEventArgs extends IEventArgs {
    property: string;
    value: string;
}
