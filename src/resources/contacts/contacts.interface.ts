import { Document } from "mongoose";

export interface IContacts extends Document {
    customerId: string;
    contactName: string;
    phone: number;
}