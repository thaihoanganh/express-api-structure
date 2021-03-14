import { Application } from "express";
import { AppInterface, RouteInterface } from "../interfaces";

class Server {
    private port: number;
    private app: Application;

    constructor(appConfig: AppInterface) {
        this.app = appConfig.core;
        this.port = appConfig.port;

        this.autoLoad(appConfig.autoLoad);
        this.middlewares(appConfig.middlewares);
        this.routes(appConfig.routes);
    }

    private autoLoad(autoLoad: any) {
        for (let i = 0; i < autoLoad.length; i++) {
            autoLoad[i];
        }
    }

    private middlewares(middlewares: any[]) {
        for (let i = 0; i < middlewares.length; i++) {
            this.app.use(middlewares[i]);
        }
    }

    private routes(routesConfig: RouteInterface[]) {
        for (let i = 0; i < routesConfig.length; i++) {
            const { method, path, middlewares, handler } = routesConfig[i];
            const callback = [...middlewares, handler];
            switch (method) {
                case "GET":
                    this.app.get(path, callback);
                    break;
                case "POST":
                    this.app.post(path, callback);
                    break;
                case "PUT":
                    this.app.put(path, callback);
                    break;
                case "PATCH":
                    this.app.patch(path, callback);
                    break;
                case "DELETE":
                    this.app.delete(path, callback);
                    break;

                default:
                    this.app.options(path, callback);
                    break;
            }
        }
    }

    public start() {
        this.app.listen(this.port, () => {
            console.log("\x1b[36m%s\x1b[0m", `[Server]`, "\x1b[0m", `Running on port ${this.port}`);
        });
    }
}

export default Server;
