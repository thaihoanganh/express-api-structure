import multer from "multer";

import config from "../../../config";

abstract class Controller {
    protected upload() {
        const destination = (req, file, cb) => {
            const { rootPath, limit, groupPath } = config.storage;
            for (let i = 0; i < groupPath.length; i++) {
                if (groupPath[i].mimeGroup.indexOf(file.mimetype) > -1) {
                    return cb(null, rootPath + groupPath[i].path);
                }
            }

            return cb(null, config.storage.rootPath + "/common");
        };

        const filename = (req, file, cb) => cb(null, file.originalname);

        return multer({
            storage: multer.diskStorage({ destination, filename }),
        });
    }
}

export default Controller;
