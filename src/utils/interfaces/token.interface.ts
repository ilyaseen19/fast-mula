import { Schema } from "mongoose";

interface Token extends Object {
    id: Schema.Types.ObjectId;
    expiresin: number
}

export default Token