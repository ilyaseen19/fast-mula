import { Schema, model } from "mongoose";
import  { IPaymentRecord } from "@/resources/payment_records/paymentrecs.interface"

const PaymentRecordSchema: Schema = new Schema(
    {
      loanId: { type: String, required: true, trim: true },
      paymentDate: { type: Date, required: true },
      remainingAmount: { type: Number, required: true },
      amountPaid: { type: Number, required: true },
      actualAmount: { type: Number, required: true },
      clearRemainingAmount: { type: Boolean, required: true },
      comments: { type: String, required: true },
      proofOfPayment: { type: String, required: true },
      rejectRemarks: { type: String, required: true },
      reviewResults: { type: String, required: true }, // cleared or not-cleared
      reviewOfficer: { type: String, required: true },
      confirmedBy: { type: String, required: true },
    },
    { timestamps: true }
  );
  
  const PaymentRecord = model<IPaymentRecord>('PaymentRecord', PaymentRecordSchema);
  
  export default PaymentRecord;