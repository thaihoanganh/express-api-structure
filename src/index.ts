import express from "express";
import bodyParser from "body-parser";
import MongoDB from "./system/infrastructure/mongodb";

import config from "./config";
import serverSetup from "./system/server";
import routes from "./app/routes";

const server = new serverSetup({
    core: express(),
    port: config.app.port,
    autoLoad: [
        MongoDB.connect(config.database.mongodb)
    ],
    middlewares: [
        bodyParser.urlencoded({ extended: false }), 
        bodyParser.json()
    ],
    routes: routes,
});

server.start();