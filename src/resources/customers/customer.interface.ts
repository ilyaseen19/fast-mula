import { Document } from "mongoose";

export interface ICustomer extends Document {
    customerId:  number;
    fullName: string;
    email: string;
    phone: number;
    backUpphone: number;
    customerIsBlocked: boolean;
    customerIsOnline: boolean;
    customerIsVerified: boolean;
    customerLevel: number;
    customerImage: string;
    customerIdFrontImage: string;
    customerIdBackImage: string;
    IDCardNumber: string;
    gender: string;
    dateOfBirth: Date;
    registerationDate: Date;
    educationalLevel: string;
    isInSchool: boolean;
    residentialType: string;
    residentialAddress: Object;
    residenceLength: number;
    maritalStatus: string;
    dependantsRelatives: number;
    company: string;
    workAddress: Object;
    monthlyIncome: number;
    emergencyContatcs: object;
    creditType: string;
    isApplied: boolean;
    accumulatedOverdue: number;
}