
import { Level } from 'ng2-logger/ng2-logger';

export class ApplicationConfig {

    public static get APPLICATION_SINK_NAME(): string { return 'app'; }
    public static get APPLICATION_SINK_LEVELS(): Array<Level> { return [Level.ERROR, Level.WARN, Level.INFO]; }

    public static get ROUTER_SINK_NAME(): string { return 'router'; }
    public static get ROUTER_SINK_LEVELS(): Array<Level> { return [Level.ERROR, Level.WARN, Level.INFO]; }

    public static get MODEL_SINK_NAME(): string { return 'model'; }
    public static get MODEL_SINK_LEVELS(): Array<Level> { return [Level.ERROR, Level.WARN, Level.INFO]; }

}
