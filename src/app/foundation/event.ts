
export interface IEvent<TSender, TEventArgs extends IEventArgs> {
    sender: TSender;
    args: TEventArgs;
}

export interface IEventArgs { }
