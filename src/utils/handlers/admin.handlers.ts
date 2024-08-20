import { ILoan } from "@/resources/loans/loan.interface";
import CheckDuration from "../checkduration.util";
import ComputeOverDue from "../computeOverdue.util";

class AdminHandlers {
    private penalty = 2


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

    public unCompletedCase = async (loan: ILoan): Promise<ILoan> => {
        let duration = await CheckDuration(loan)

        let updatedLoan = await ComputeOverDue(loan, this.penalty, duration);

        return updatedLoan
    }
}

export default AdminHandlers