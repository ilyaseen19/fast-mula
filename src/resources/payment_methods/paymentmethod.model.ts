import { Schema, model } from "mongoose";
import { IPaymentMethod } from "@/resources/payment_methods/pymentmethod.interface"


const PaymentMethodSchema: Schema = new Schema(
    {
      customerId: {
        type: String,
        required: true,
        unique: false,
        trim: true
      },
      phone: {
        type: Number,
        required: true,
        unique: false,
      },
      mno: {
        type: String,
        required: true,
        unique: false,
      },
      isVerified: {
        type: Boolean,
        required: true,
      },
    },
    { timestamps: true }
  );

  const PaymentMethods = model<IPaymentMethod>("PaymentMethod", PaymentMethodSchema)

  export default PaymentMethods