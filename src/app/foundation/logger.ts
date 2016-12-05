
import { Log, Level } from 'ng2-logger/ng2-logger';

/* tslint:disable:no-any */
export class LogInfo {

    constructor(log: Log, isDefault: boolean = false) {
        this._log = log;
        this._isDefault = isDefault;
    }

    private _log: Log;
    public get log(): Log { return this._log; }

    private _isDefault: boolean = false;
    public get isDefault(): boolean { return this._isDefault; }

    public Error(message: string, ...params: any[]): void { (<any>this.log).er(message, params); }

    public Info(message: string, ...params: any[]): void { (<any>this.log).i(message, params); }

    public Warn(message: string, ...params: any[]): void { (<any>this.log).w(message, params); }

    public Debug(message: string, ...params: any[]): void { (<any>this.log).d(message, params); }
}
/* tslint:enable:no-any */

export interface ILogIndexer {
    [name: string]: LogInfo;
}

/* tslint:disable:no-any */
export class Logger {

    public static get DEFAULT_LOG_NAME(): string { return 'bootstrap'; }

    public static Sinks: ILogIndexer = {};

    public static AddLog(name: string, log: Log, isDefault: boolean = false) {
        Logger.Sinks[name] = new LogInfo(log, isDefault);

        if (isDefault) {
            Logger.DefaultSink = Logger.Sinks[name];
        }
    }

    public static Error(message: string, ...params: any[]): void { (<any>Logger.DefaultSink.log).er(message, params); }

    public static Info(message: string, ...params: any[]): void { (<any>Logger.DefaultSink.log).i(message, params); }

    public static Warn(message: string, ...params: any[]): void { (<any>Logger.DefaultSink.log).w(message, params); }

    public static Debug(message: string, ...params: any[]): void { (<any>Logger.DefaultSink.log).d(message, params); }

    private static DefaultSink: LogInfo = new LogInfo(Log.create(Logger.DEFAULT_LOG_NAME, Level.ERROR /*, Level.INFO, Level.WARN, Level.DATA */));
}
/* tslint:enable:no-any */
