import { Schema, Types, model } from "mongoose";
import { ILoan } from "@/resources/loans/loan.interface";

const LoanSchema: Schema = new Schema(
    {
      customerId: { type: String, required: true, unique: false, trim: true },
      terms: { type: Boolean, required: true },
      amount: { type: Number, required: true },
      duration: { type: String, required: true },
      dateToBePaid: { type: Date, required: true },
      dateOfApplication: { type: Date, required: true },
      dateOfDisbursment: { type: Date, required: true },
      datePaid: { type: Date, required: true },
      isNewLoan: { type: Boolean, required: true },
      interest: { type: Number, required: true },
      amountToPay: { type: Number, required: true },
      loanStatus: { type: String, required: true },
      paymentStatus: { type: String, required: true },
      useOfLoan: { type: String, required: true },
      paymentMethod: { type: Number, required: true },
      whereHeard: { type: String, required: true },
      facialRecog: { type: String, required: true },
      reviewOfficerName: { type: String, required: true },
      reviewComment: { type: String, required: true },
      collectionOfficer: { type: String, required: true },
      amountPaid: { type: Number, required: true },
      loanType: {type: String, required: true, trim: true},
      nameAttached: {type: String, required: true, trim: true},
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
        timestamps: true
     }
  );
  
  const Loans = model<ILoan>('Loan', LoanSchema);
  
  export default Loans;