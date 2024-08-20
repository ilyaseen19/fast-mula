import { Request, Response, NextFunction } from "express";
import HttpException from "@/utils/exceptions/http.exception";

export const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction): void => {
    const status = error.status || 500
    const message = error.message || "Something went wrong, please contact tech support"

    res.status(status).json({
        success: false,
        status,
        message
    })
}



