import jwt  from "jsonwebtoken";
import { AdminInterface } from "@/resources/admins/admin.interfaces";
import Token from "./interfaces/token.interface";

export const createToken = (admin: AdminInterface): string => {
    return jwt.sign({id: admin._id}, process.env.JWT_SECRET as jwt.Secret, {
        expiresIn: "1d"
    })
}

export const verifyToken = (token: string): Promise<jwt.VerifyErrors | Token> => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET as jwt.Secret, (err, payload) => {
            if(err) return reject(err)

            resolve(payload as Token)
        })
    })
} 

export default { createToken, verifyToken }