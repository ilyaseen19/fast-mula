import { Schema, Types, model } from "mongoose";
import { ILoan } from "@/resources/loans/loan.interface";

const LoanSchema: Schema = new Schema(
    {
      customerId: { type: Types.ObjectId, ref: "Customer", required: true, unique: false, trim: true },
      terms: { type: Boolean, required: true },
      amount: { type: Number, required: true },
      duration: { type: Number, required: true },
      dateToBePaid: { type: Date, required: false },
      dateOfApplication: { type: Date, required: true },
      dateOfDisbursment: { type: Date, required: false },
      datePaid: { type: Date, required: false },
      isNewLoan: { type: Boolean, required: true },
      interest: { type: Number, required: true },
      amountToPay: { type: Number, required: true },
      loanStatus: { type: String, required: true },
      paymentStatus: { type: String, required: true },
      useOfLoan: { type: String, required: true },
      paymentMethod: { type: Number, required: true },
      whereHeard: { type: String, required: true },
      facialRecog: { type: String, required: true },
      reviewOfficerName: { type: String, required: false, trim: true },
      reviewComment: { type: String, required: false },
      collectionOfficer: { type: String, required: false, trim: true },
      amountPaid: { type: Number, required: false },
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