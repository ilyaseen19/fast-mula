import { ILoan } from "@/resources/loans/loan.interface";
import { Res } from "@/utils/interfaces/res.interface";

function addDays(date: Date, days: number): Date {
    let result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
}

const grantLoan = async (loan: ILoan, reveiewComent: string): Promise<Res> => {
   loan.loanStatus = "Granted";
   loan.dateOfDisbursment = new Date();
   loan.dateToBePaid = addDays(loan.dateOfDisbursment, loan.duration);
   loan.reviewComment = reveiewComent

   let results: Res;

   loan.save().catch(err => {
    if(err) return results = {
        success: false,
        message: err.message
    }
   });

   results = {
      success: true,
      message: "Loan granted successfully"
   }

   return results
}

export default grantLoan