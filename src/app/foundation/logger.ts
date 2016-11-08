
import { Logger as AngularLogger } from 'angular2-logger/core';

export class Logger {

    private static log: AngularLogger;
    public static get LOG(): AngularLogger { return Logger.log; }

    public static Init(log: AngularLogger) {
        Logger.log = log;
        Logger.log.level = log.Level.LOG;
    }
}
