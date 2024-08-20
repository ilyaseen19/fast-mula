import { ILoan } from "@/resources/loans/loan.interface";

const ComputeOverDue = async (loan: ILoan, duration: number, penalty: number): Promise<ILoan> => {

    let computedPenalty = ((penalty/100) * loan.amount) * duration

    let computedAmount = computedPenalty + loan.amountToPay

    loan.amountToPay = computedAmount;

    return loan
}

export default ComputeOverDue