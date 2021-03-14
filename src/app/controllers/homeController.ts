import Controller from "../../system/core/controller";
import { Request, Response, NextFunction } from "express";

import MongoDB from "../../system/infrastructure/mongodb";

class HomeController extends Controller {
    public async get(req: Request, res: Response, next: NextFunction) {
        const database = await MongoDB.connect();
        console.log(await database.collection("User").find({}).toArray());

        res.json({
            success: true,
        });
    }

    public post(req: Request, res: Response) {
        console.log(req.body);
        res.json({
            success: true,
        });
    }
    public postImage = this.upload().single("image");
}

export default new HomeController();
