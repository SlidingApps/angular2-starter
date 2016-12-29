
import { Level } from 'ng2-logger/ng2-logger';

export class ApplicationConfig {

    public static get APPLICATION_SINK_NAME(): string { return 'app'; }
    public static get APPLICATION_SINK_LEVELS(): Array<Level> { return [Level.ERROR, Level.WARN, Level.INFO /* , Level.DATA */]; }

    public static get ROUTER_SINK_NAME(): string { return 'router'; }
    public static get ROUTER_SINK_LEVELS(): Array<Level> { return [Level.ERROR, Level.WARN, Level.INFO /* , Level.DATA */]; }

    public static get REST_SINK_NAME(): string { return 'rest'; }
    public static get REST_SINK_LEVELS(): Array<Level> { return [Level.ERROR, Level.WARN, Level.INFO /* , Level.DATA */]; }

    public static get MODEL_SINK_NAME(): string { return 'model'; }
    public static get MODEL_SINK_LEVELS(): Array<Level> { return [Level.ERROR, Level.WARN, Level.INFO /* , Level.DATA */]; }

    public static get READMODEL_HOST_URL(): string { return 'http://localhost:8082'; }
    public static get READMODEL_API_PATH(): string { return 'query'; }

    public static get WRITEMODEL_HOST_URL(): string { return 'http://localhost:8081'; }
    public static get WRITEMODEL_API_PATH(): string { return 'command'; }

}
