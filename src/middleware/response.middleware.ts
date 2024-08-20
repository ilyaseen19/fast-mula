export default class ApiResponse {
    public status: number
    public message: string
    public data: {}
    public success: boolean


    constructor (status: number, message: string, data: {}) {
        this.status = status
        this.message = message
        this.data = data
        this.success = status < 400 ? true : false
    }
}