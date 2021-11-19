const { WrongDataType } = require("./errors/errors");

const checkDataType = (name, price) => {
    if (typeof name !== "string" || typeof price !== "number") {
        throw new WrongDataType();
    }
};

module.exports = { checkDataType };
