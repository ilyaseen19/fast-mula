import { Document } from 'mongoose';

export interface ICallRecord extends Document {
  loanId: string; //object id of the loan
  calledNumber: number;
  relationship: string;
  callResult: string;
  plannedRepayDate: Date;
  callDate: Date;
  officer: string;
  remarks: string;
  caseLevel: string;
}