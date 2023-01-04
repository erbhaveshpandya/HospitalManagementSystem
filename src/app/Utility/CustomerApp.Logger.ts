export interface ILogger{
    Log();
}

export class BaseLogger implements ILogger{
    Log() {
        
    }
}
export class ConsoleLogger extends BaseLogger{
    override Log()
    {
      console.log("Using consoler logger");
    }
}
export class DBLogger extends BaseLogger{
    override Log()
    {
        console.log("Using DB logger");
    }
}