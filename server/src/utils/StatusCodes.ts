enum StatusCodes {
  Ok = 200,
  NoContent = 204,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401, // no authentication
  Forbidden = 403, // no permission
  NotFound = 404,
  ServerError = 500,
}

export default StatusCodes;
