import { ILoan } from "@/resources/loans/loan.interface";

const CheckDuration = async (loan: ILoan): Promise<number> => {
    let dtp: Date = new Date(loan.dateToBePaid);
    let dod: Date = new Date(loan.dateOfDisbursment);

    var diff = dtp.valueOf() - dod.valueOf();

    var diffDays = Math.ceil(diff / (1000 * 3600 * 24));

    return diffDays;
};

export default CheckDuration;
