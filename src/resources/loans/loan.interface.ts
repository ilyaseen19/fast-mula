import { Document } from "mongoose";

export interface ILoan extends Document {
    customerId: string;
    terms: boolean;
    amount: number;
    duration: string;
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
}
