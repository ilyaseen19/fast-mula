import { config } from "@/utils/config";
import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
    try {
        const conn = await mongoose.connect(config.mongodb_uri, {});
        console.log(`database connected :${conn.connection.host} 💥`);
    } catch (error) {
        console.log(`error${error}`);
        process.exit(1);
    }
};

export default connectDB
