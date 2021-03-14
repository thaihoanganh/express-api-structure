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
import Model from "../../system/core/model";

class ${className} extends Model {}

export default ${className};
`;

fs.writeFileSync(`src/app/models/${fileName}.ts`, template.trim());
