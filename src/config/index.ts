import ConfigInterface from "../interfaces";

const config: ConfigInterface = {
    app: {
        port: 3300,
    },
    storage: {
        rootPath: "src/uploads",
        limit: 10,
        groupPath: [
            {
                path: "/image",
                mimeGroup: ["image/jpeg", "image/png", "image/svg+xml", "image/gif", "image/bmp"],
            },
        ],
    },
    database: {
        mongodb: {
            uri: "mongodb://localhost:27017",
            databaseName: "mockdata",
            options: {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
        },
    },
};

export default config;
