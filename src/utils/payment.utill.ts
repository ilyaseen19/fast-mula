import { ILoan } from "@/resources/loans/loan.interface";
import { Res } from "./interfaces/res.interface";

const processPayments = async (loan: ILoan, paymentType: string): Promise<Res> => {
    let results: Res;


    if(paymentType === "Disburse") {

        /**
         * handle disburse payments from admin panel using payment apis here, return true is successfull else false
         */
        return results = {
            success: true,
            message: "payment message"
        }
    };

    /**
     * handle loan re-payments from customers using payment apis here, return true if successfull else return false
     */

    return results = {
        success: true,
        message: "payment message"
    }
} 

export default processPayments