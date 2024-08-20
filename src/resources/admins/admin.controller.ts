import { Request, Response, NextFunction, Router } from "express";
import Controller from "@/utils/interfaces/controller.interface";
import HttpException from "@/utils/exceptions/http.exception";
import validationMiddleware from "@/middleware/validation.middleware";
import validate from "@/resources/admins/admin.validations";
import ApiResponse from "@/middleware/response.middleware";
import AdminServices from "@/resources/admins/admin.services"
import authenticated from "@/middleware/authenticated.middleware";
import { ICustomAdminReqBody, IupdatePassword } from "@/resources/admins/admin.interfaces";

class AdminController implements Controller {
    public path = '/admin';
    public router = Router()
    private AdminServices = new AdminServices()

    constructor () {
        this.initialiseRoutes()
    }

    private initialiseRoutes = (): void => {
        this.router.post(
            `${this.path}/create-admin`,
            validationMiddleware(validate.create),
            this.create
        ),
        this.router.post(`${this.path}/login`, validationMiddleware(validate.login), this.login),
        this.router.get(`${this.path}/get-admin`, authenticated, this.getAdmin)
        this.router.get(`${this.path}/get-admin-by-id/:userId`, authenticated, this.getAdminByAdminId)
        this.router.get(`${this.path}/get-all-admins`, authenticated, this.getAllAdmins)
        this.router.patch(`${this.path}/update-admin-data/:userId`, authenticated, validationMiddleware(validate.updateAdmin),  this.updateAdminData)
        this.router.delete(`${this.path}/delete-admin`, authenticated, this.removeAdmin)
        this.router.get(`${this.path}/get-data-by-admin-Id/:userId`, authenticated, this.getDataByAdminId);
        this.router.patch(`${this.path}/update-admin-password/:userId`, authenticated, validationMiddleware(validate.updatePassword), this.updatePassword)
    }

    private create = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            let { userName, fullName, email, password, phone, role, department } = req.body;

            const admin = await this.AdminServices.createAdmin(userName, fullName, email, password, phone, role, department)

            res.status(201).json(new ApiResponse(201, "Data created successfully", admin))
        } catch (error) {
            next(new HttpException(400, error.message))
        }
    }

    private login = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            const {userName, password} = req.body

            const token = await this.AdminServices.login(userName, password)

            return res.status(200).json(new ApiResponse(200, "logged in successfully", token))
        } catch (error) {
            next(new HttpException(400, error.message))
        }
    }

    private getAdmin = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        if(!req.admin) return next(new HttpException(404, "No data found"))

        return res.status(200).json(new ApiResponse(200, "Data fetched success", req.admin))
    }

    private getAdminByAdminId = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
       try {
        const userId = req.params.userId

        const admin = await this.AdminServices.getAdminById(userId)

        if(!admin) return next(new HttpException(404, "Could find data"))

        return res.status(200).json(new ApiResponse(200, "Data fetched successfully", admin))
       } catch (error) {
            next(new HttpException(500, error.message))
       }
    }

    private getAllAdmins = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            const adminsData = await this.AdminServices.getAllAdmins()

            if(!adminsData) return next(new HttpException(400, "Could not find data"))

            return res.status(200).json(new ApiResponse(200, "Data retrieved successfully", adminsData))
        } catch (error) {
            next(new HttpException(500, error.message))
        }
    }

    private updateAdminData = async (req: Request<{ userId: string }, {}, ICustomAdminReqBody>, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            const userId = parseInt(req.params.userId)

            const {  userName, email, fullName, phone, role, department } = req.body

            const updatedAdmin = await this.AdminServices.updateAdmin(userName, userId, email, fullName, phone, role, department)

            if(!updatedAdmin) next(new HttpException(400, "Unable to update data, please try again"))

            return res.status(200).json(new ApiResponse(200, "Data updated successfully", {}))
        } catch (error) {
            next(new HttpException(500, error.message))
        }
    }

    private removeAdmin = async (req: Request<{userId: string}, {}, {}>, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            const _id = req.params.userId

            const deleted = await this.AdminServices.removeAdmin(_id)

            if(!deleted) next(new HttpException(400, "Unable to complete request, please try again"))

            return res.status(200).json(new ApiResponse(200, "Request completed successfully", {}))
        } catch (error) {
            next(new HttpException(500, error.message))
        }
    }

    private getDataByAdminId = async (req: Request<{userId: string}, {}, {}>, res:Response, next: NextFunction): Promise<Response | void> => {
        try {
            const userId = parseInt(req.params.userId)

            const results = await this.AdminServices.fetchDataByAdminId(userId)

            if(!results) next(new HttpException(400, "Could not retreieve data, please try again"))

            return res.status(200).json(new ApiResponse(200, "Data retrieved successfully", results))
        } catch (error) {
            next(new HttpException(500, error.message))
        }
    }

    private updatePassword = async (req: Request<{userId: string}, {}, IupdatePassword>, res: Response, next: NextFunction): Promise<Response | void> => {
       try {
            let userId = parseInt(req.params.userId);
            const {oldPassword, newPassword} = req.body;

            const results = await this.AdminServices.updatePassword(oldPassword, newPassword, userId);

            if(!results) next(new HttpException(400, "Could not complete request, please try again"));

            return res.status(200).json(new ApiResponse(200, "Data retrieved successfully", {}))
       } catch (error) {
            next(new HttpException(500, error.message))
       }
    }
}

export default AdminController