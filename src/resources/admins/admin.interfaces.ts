import { Document } from "mongoose"

export interface AdminInterface extends Document {
    userName: string;
    fullName: string;
    password: string;
    email: string;
    role: string;
    department: string;
    dateCreated: Date;
    phone: number;
    isBlocked: boolean;
    isOnline: boolean;
    userId: number;


    isPasswordValid(password: string): Promise<Error | boolean>
}

export interface ICustomAdminReqBody {
    userName: string;
    fullName: string;
    email: string;
    role: string;
    phone: number;
    department: string
}

export interface IupdatePassword {
    oldPassword: string;
    newPassword: string
}