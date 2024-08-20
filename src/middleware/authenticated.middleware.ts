import { Request, Response, NextFunction } from "express";
import { verifyToken } from "@/utils/token";
import adminModel from "@/resources/admins/admin.model";
import Token from "@/utils/interfaces/token.interface";
import jwt from "jsonwebtoken";
import HttpException from "@/utils/exceptions/http.exception";

const authenticated = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const bearer = req.headers.authorization

    if(!bearer || !bearer.startsWith("Bearer ")) return next(new HttpException(401, "Unauthorised request"))

    const accessToken = bearer.split("Bearer ")[1].trim()

    try {
        const payload: Token | jwt.JsonWebTokenError = await verifyToken(accessToken)

        if(payload instanceof jwt.JsonWebTokenError) return next(new HttpException(401, "Unauthorised request"))

        const admin = await adminModel.findById({_id: payload.id}).select("-password").exec()

        if(!admin) return next(new HttpException(401, "Unauthorised request"))

        req.admin = admin

        return next()
    } catch (error) {
        console.log(error);

       return next(new HttpException(400, error.message))
    }
}

export default authenticated

