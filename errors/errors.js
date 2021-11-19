class TaskManagerError extends Error {}


class InvalidCredentials extends TaskManagerError{
  constructor(){
      super()
      this.message = "invalid credentials"
      this.errorCode = 403
  }
}

class NoExsistingProduct extends TaskManagerError{
  constructor(){
    super()
    this.message = "Couldn't find any product"
    this.errorCode = 404
  }
}
class WrongDataType extends TaskManagerError{
  constructor(){
    super()
    this.message = "Wrong data type of credentials"
    this.errorCode = 403
  }
}

/****** Users ******/

class NoExistingUser extends TaskManagerError{
  constructor(){
    super()
    this.message = "Couldn't find user"
    this.errorCode = 404
  }
}



module.exports = {
  TaskManagerError,
  InvalidCredentials,
  NoExsistingProduct,
  WrongDataType,
  NoExistingUser
  }