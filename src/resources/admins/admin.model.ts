import { model, Schema, Types } from "mongoose";
import { AdminInterface } from "@/resources/admins/admin.interfaces";
import bcrypt from "bcrypt"

const AdminSchema = new Schema(
    {
        userName: { type: String, required: true, unique: true },
        userId: { type: Number, required: true, trim: true },
        fullName: { type: String, required: true },
        email: { type: String, required: true, unique: true, trim: true },
        password: { type: String, required: true },
        phone: { type: Number, required: true, unique: true },
        role: { type: String, required: true },
        department: { type: String, required: true },
        dateCreated: { type: Date, required: true },
        isOnline: { type: Boolean, required: true },
        isBlocked: { type: Boolean, required: true },
    },
    {
        toJSON: {
            transform(doc, ret) {
                delete ret.__v, 
                delete ret.createdAt, 
                delete ret.modifiedAt, 
                delete ret.updatedAt
            },
        },
        timestamps: true,
    },
);

AdminSchema.pre<AdminInterface>("save", async function(next) {

    if(!this.isModified("password")) return next()

    const hash = await bcrypt.hash(this.password, 10)

    this.password = hash

    next()
})

AdminSchema.methods.isPasswordValid = async function (password: string): Promise<Error | boolean> {
    return await bcrypt.compare(password, this.password)
}

export default model<AdminInterface>("Admin", AdminSchema)
