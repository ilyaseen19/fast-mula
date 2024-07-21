class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode
    this.data = data
    this.success = statusCode < 400
    this.messasge = message
  }
}

export { ApiResponse };