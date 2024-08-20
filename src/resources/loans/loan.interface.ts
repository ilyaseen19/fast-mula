import { Document, Types } from "mongoose";

export interface ILoan extends Document {
    _id: Types.ObjectId;
    customerId: string;
    terms: boolean;
    amount: number;
    duration: number;
    dateToBePaid: Date;
    dateOfApplication: Date;
    dateOfDisbursment: Date;
    datePaid: Date;
    isNewLoan: boolean;
    interest: number;
    amountToPay: number;
    loanStatus: string; // Review / Granted / Rejected / Completed
    paymentStatus: string; // Paid / Not Paid
    useOfLoan: string;
    paymentMethod: number;
    whereHeard: string;
    facialRecog: string;
    reviewOfficerName: string;
    reviewComment: string;
    collectionOfficer: string;
    amountPaid: number;
    loanType: string; // cash / agri / farm animals
    nameAttached: string
};

export interface ILoanRequest {
    _id: Types.ObjectId;
    customerId: string;
    terms: boolean;
    amount: number;
    duration: number
    dateOfApplication: Date;
    interest: number;
    amountToPay: number;
    useOfLoan: string;
    paymentMethod: number;
    whereHeard: string;
    facialRecog: string;
    loanType: string; // cash / agri / farm animals
    nameAttached: string;
}
