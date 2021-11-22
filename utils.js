const { WrongDataType } = require("./errors/errors.js");

const checkDataType = (name, price) => {
    if (typeof name !== "string" || typeof price !== "number") {
        
        return false
    }
    return true
};

module.exports = { checkDataType };
