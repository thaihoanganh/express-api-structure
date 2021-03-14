const fs = require("fs");

function camelize(str) {
    return str.replace(/-./g, (x) => x.toUpperCase()[1]);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const fileName = process.argv[2];
const className = capitalizeFirstLetter(camelize(fileName));

const template = `
import Controller from "../../system/core/controller";
import { Request, Response, NextFunction } from "express";

class ${className} extends Controller {
    public index(req: Request, res: Response, next: NextFunction) {
        
    }
}

export default new ${className}();
`;

fs.writeFileSync(`src/app/controllers/${fileName}.ts`, template.trim());
