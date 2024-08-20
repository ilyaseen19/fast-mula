import { Document } from 'mongoose';

export interface IPaymentRecord extends Document {
  loanId: string;
  paymentDate: Date;
  remainingAmount: number;
  amountPaid: number;
  actualAmount: number;
  clearRemainingAmount: boolean;
  comments: string;
  proofOfPayment: string;
  rejectRemarks: string;
  reviewResults: string; // cleared or not-cleared
  reviewOfficer: string;
  confirmedBy: string;
}