import { Application } from "express";

export interface AppInterface extends AppConfigInterface {
    core: Application;
    autoLoad: any[],
    middlewares: any[];
    routes: RouteInterface[];
}

export default interface ConfigInterface {
    app: AppConfigInterface;
    storage: StorageConfigInterface;
    database: DatabaseInterface;
}

export interface AppConfigInterface {
    port: number;
}

export interface StorageConfigInterface {
    rootPath: string;
    limit: number;
    groupPath: {
        path: string;
        mimeGroup: string[];
    }[];
}

export interface DatabaseInterface {
    mongodb: {
        uri: string;
        databaseName: string;
        options: {
            useNewUrlParser: boolean;
            useUnifiedTopology: boolean;
        };
    };
    [prop: string]: any;
}

export interface RouteInterface {
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS";
    path: string;
    middlewares: any[];
    handler: any[];
}
