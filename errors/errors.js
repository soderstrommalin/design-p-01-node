class ErrorManager extends Error {}

class InvalidCredentials extends ErrorManager {
    constructor() {
        super();
        this.message = "invalid credentials";
        this.errorCode = 403;
    }
}

class NoExsistingProduct extends ErrorManager {
    constructor() {
        super();
        this.message = "Couldn't find any product";
        this.errorCode = 404;
    }
}
class WrongDataType extends ErrorManager {
    constructor() {
        super();
        this.message = "Wrong data type of credentials";
        this.errorCode = 403;
    }
}

/****** Users ******/

class NoExistingUser extends ErrorManager {
    constructor() {
        super();
        this.message = "Couldn't find user";
        this.errorCode = 404;
    }
}
class NoExistingCart extends ErrorManager {
    constructor() {
        super();
        this.message = "Couldn't find cart";
        this.errorCode = 404;
    }
}

class InvalidBody extends ErrorManager {
    constructor(fields) {
        super();
        this.fields = fields;
        this.message = `invalid body, require ${this.fields.join(" & ")}`;
        this.errorCode = 400;
    }
}

module.exports = {
    ErrorManager,
    InvalidCredentials,
    NoExsistingProduct,
    WrongDataType,
    NoExistingUser,
    InvalidBody,
    NoExistingCart,
};
