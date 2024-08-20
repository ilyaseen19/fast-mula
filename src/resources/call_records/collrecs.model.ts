import { Schema, model, Types } from "mongoose";
import { ICallRecord } from "@/resources/call_records/callrecs.interface"

const CallRecordsSchema: Schema = new Schema({
    loanId: {type: String, required: true, trim: true},
    calledNumber: {
      type: Number,
      required: true,
      unique: false,
    },
    relationship: {
      type: String,
      required: true,
      unique: false,
    },
    callResult: {
      type: String,
      required: true,
      unique: false,
    },
    plannedRepayDate: {
      type: Date,
      required: true,
      unique: false,
    },
    callDate: {
      type: Date,
      required: true,
      unique: false,
    },
    officer: {
      type: String,
      required: true,
      unique: false,
    },
    remarks: {
      type: String,
      required: true,
      unique: false,
    },
    caseLevel: {
        type: String,
        required: true,
    }
  });

  const CallRecords = model<ICallRecord>("CallRecord", CallRecordsSchema)

  export default CallRecords