import { ILoan } from "@/resources/loans/loan.interface";
import CheckDuration from "@/utils/checkduration.util";
import ComputeOverDue from "@/utils/computeOverdue.util";
import processPayments from "@/utils/payment.utill";
import grantLoan from "@/utils/grantloan.util";
import { Res } from "@/utils/interfaces/res.interface";

class AdminHandlers {
    private penalty = 2;
    protected processPayment = processPayments
    protected grantLoan = grantLoan


    public sortPreCollectionCases = async (loans: Array<ILoan>): Promise<Array<ILoan>> => {
        
        let results: Array<ILoan> = []
       loans.forEach(async loan => {
            let duration = await CheckDuration(loan)

            if(0 <= duration && duration < 3) results.push(loan)
       })


       return results
    }

    public sortedUnassignedCollectionCases = async (loans: Array<ILoan>): Promise<Array<ILoan>> => {
        let results: Array<ILoan> = []
        loans.forEach(async loan => {
            let duration = await CheckDuration(loan)

            if(duration < 0 && loan.collectionOfficer === ""){
                let updatedLoan = await ComputeOverDue(loan, this.penalty, duration);

                results.push(updatedLoan)
            }
        });

        return results
    }

    public sortedAssignedCollectionCases = async (loans: Array<ILoan>): Promise<Array<ILoan>> => {
        let results: Array<ILoan> = []
        loans.forEach(async loan => {
            let duration = await CheckDuration(loan)

            if(duration < 0 && loan.collectionOfficer !== "" && loan.loanStatus !== "Completed"){
                let updatedLoan = await ComputeOverDue(loan, this.penalty, duration);

                results.push(updatedLoan)
            }
        });

        return results
    }

    public sortedCompletedCollectionCases = async (loans: Array<ILoan>): Promise<Array<ILoan>> => {
        let results: Array<ILoan> = []
        loans.forEach(async loan => {
            let duration = await CheckDuration(loan)

            if(duration <= 0 && loan.collectionOfficer !== "" && loan.loanStatus === "Completed")  results.push(loan)
        });

        return results
    }

    public signleCaseHandler = async (loan: ILoan): Promise<ILoan> => {
        let duration = await CheckDuration(loan)

        let updatedLoan = await ComputeOverDue(loan, this.penalty, duration);

        return updatedLoan
    }

    public processCaseHandler = async (loan: ILoan, processType: string, reviewComment: string): Promise<Res> => {
        let results: Res;

        if(processType === "Reject") {
            loan.loanStatus = "Rejected"
            loan.reviewComment = reviewComment;
            
            loan.save().catch(err => {
                if(err) return results = {
                    success: false,
                    message: err.message
                } 
            });

            return results = {
                success: true,
                message: "Loan rejected sucessfully"
            }
        };

        const paymentType = "Disbursment";

        let paymentResponse = await this.processPayment(loan, paymentType);

        if(!paymentResponse.success) return results = {
            success: false,
            message: paymentResponse.message
        };

        let isGranted = await this.grantLoan(loan, reviewComment)

        if(!isGranted.success) return results = {
            success: false,
            message: isGranted.message
        }

        results = {
            success: true,
            message: "Loan granted sucessfully"
        }

        return results
    }
}

export default AdminHandlers