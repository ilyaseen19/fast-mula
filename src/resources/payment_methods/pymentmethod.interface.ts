import { Document } from 'mongoose';

export interface IPaymentMethod extends Document {
  customerId: string;
  phone: number;
  mno: string;
  isVerified: boolean;
}