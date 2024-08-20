import { Document } from "mongoose";

interface ILogs extends Document {
    isNewLog: boolean;
    userId: string;
    logIn: Date;
    userType: string;
    logOut: Date;
}

export default ILogs