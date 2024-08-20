import { Schema, model, Types } from "mongoose";
import { ICustomer } from "./customer.interface";

const CustomerSchema = new Schema({
    customerId:  {type: Number, required: true, trim: true, unique: true},
    fullName: {type: String, required: true, trim: true},
    email: {type: String, required: true, trim: true, unique: true},
    phone: {type: Number, required: true, trim: true},
    backUpphone: {type: Number, required: false, trim: true},
    customerIsBlocked: {type: Boolean, required: false, default: false},
    customerIsOnline: {type: Boolean, required: false, default: false},
    customerIsVerified: {type: Boolean, required: true},
    customerLevel: {type: Number, required: true, trim: true, default: 0},
    customerImage: {type: String, required: false, trim: true},
    customerIdFrontImage: {type: String, required: true, trim: true, unique: true},
    customerIdBackImage: {type: String, required: true, trim: true, unique: true},
    IDCardNumber: {type: String, required: true, trim: true, unique: true},
    gender: {type: String, required: true, trim: true},
    dateOfBirth: {type: Date, required: true, trim: true},
    registerationDate: {type: Date, required: true, trim: true},
    educationalLevel: {type: String, required: true, trim: true},
    isInSchool: {type: Boolean, required: true},
    residentialType: {type: String, required: true, trim: true},
    residentialAddress:{
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zip: { type: String, required: true },
    },
    residenceLength: {type: Number, required: true, trim: true},
    maritalStatus: {type: String, required: true, trim: true},
    dependantsRelatives: {type: Number, required: true, trim: true},
    company: {type: String, required: true, trim: true},
    workAddress: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zip: { type: String, required: true },
    },
    monthlyIncome:{type: Number, required: true, trim: true},
    emergencyContatcs: {
        contact1: {
            name: {
              type: String,
              required: true,
              unique: false,
            },
            phone: {
              type: String,
              required: true,
              unique: false,
            },
            educationalLevel: {
              type: String,
              required: true,
              unique: false,
            },
            relationship: {
              type: String,
              required: true,
              unique: false,
            },
          },
        contact2: {
            name: {
              type: String,
              required: true,
              unique: false,
            },
            phone: {
              type: String,
              required: true,
              unique: false,
            },
            educationalLevel: {
              type: String,
              required: true,
              unique: false,
            },
            relationship: {
              type: String,
              required: true,
              unique: false,
            },
          },
        contact3: {
            name: {
              type: String,
              required: true,
              unique: false,
            },
            phone: {
              type: String,
              required: true,
              unique: false,
            },
            educationalLevel: {
              type: String,
              required: true,
              unique: false,
            },
            relationship: {
              type: String,
              required: true,
              unique: false,
            },
          },
    },
    creditType: {type: String, required: false, trim: true},
    isApplied: {type: Boolean, required: false, default: false},
    accumulatedOverdue:{type: Number, required: false, trim: true, default: 0}
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
        timestamps: true,
    }
)

const Customer = model<ICustomer>("Customer", CustomerSchema)

export default Customer