import { MongoClient } from "mongodb";
import config from "../../../config";

class MongoDB {
    private static connectDatabase: any;

    private constructor() {}

    static async connect(config?: any) {
        if (!MongoDB.connectDatabase && config) {
            const client: any = await MongoClient.connect(config.uri, config.options);
            MongoDB.connectDatabase = await (client).db(config.databaseName);
        }

        return MongoDB.connectDatabase;
    }
}

export default MongoDB;
