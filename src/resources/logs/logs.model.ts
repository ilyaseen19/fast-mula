import { Schema, model } from "mongoose";
import ILogs from "./logs.interface";

const LogsSchema: Schema = new Schema({
    userId: {type: String, required: true, trim: true},
    logIn: {type: Date, required: true},
    logOut: {type: Date, required: false},
    userType: {type: String, required: true},
    isNewLog: {type: Boolean, required: true},
}, {
    toJSON: {
        transform(doc, ret) {
            delete ret.__v, 
            delete ret.createdAt, 
            delete ret.modifiedAt, 
            delete ret.updatedAt
        }
    },
    timestamps: true
})

const Loggs = model<ILogs>("Logs", LogsSchema)

export default Loggs

