
import { Log } from 'ng2-logger/ng2-logger';

/* tslint:disable:no-any */
export class Logger {

    private static log: Log;
    public static get LOG(): Log { return Logger.log; }

    public static Init(log: Log) {
        Logger.log = log;
    }

    public static Error(message: string, ...params: any[]): void { (<any>Logger.LOG).er(message, params); }

    public static Info(message: string, ...params: any[]): void { (<any>Logger.LOG).i(message, params); }

    public static Warn(message: string, ...params: any[]): void { (<any>Logger.LOG).w(message, params); }

    public static Debug(message: string, ...params: any[]): void { (<any>Logger.LOG).d(message, params); }
}
