import { RouteInterface } from "../../interfaces";

import homeController from "../controllers/homeController";

const routes: RouteInterface[] = [
    {
        method: "GET",
        path: "/",
        middlewares: [],
        handler: [homeController.get],
    },
    {
        method: "POST",
        path: "/",
        middlewares: [],
        handler: [homeController.postImage, homeController.post],
    },
];

export default routes;
