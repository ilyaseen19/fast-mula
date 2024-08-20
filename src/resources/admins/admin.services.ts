import bcrypt from 'bcrypt';
import adminModel from "@/resources/admins/admin.model";
import _generateId from "@/utils/generateId.utils";
import token from "@/utils/token";
import { AdminInterface } from "./admin.interfaces";
import Loans from "@/resources/loans/loan.model"
import { ILoansData } from '@/utils/interfaces/dto.interface';
import AdminHandlers from '@/utils/handlers/admin.handlers';
import Customer from '@/resources/customers/customer.model';

class AdminServices {
    private admin = adminModel;
    private loans = Loans
    private customers = Customer
    private adminHandlers = new AdminHandlers()

    /**
     * Atempt create admin function
     */
    public createAdmin = async (
        userName: string,
        fullName: string,
        email: string,
        password: string,
        phone: number,
        role: string,
        department: string,
    ): Promise<string | Error> => {
        try {

            const isEmailExist = await this.admin.findOne({ email })
            const isUserNameExist = await this.admin.findOne({ userName })

            if(isEmailExist) throw new Error("An admin with this email already exist")

            if(isUserNameExist) throw new Error("An admin with this user name already exist")

            const userId = parseInt(await _generateId(12))
            
            const admin = await this.admin.create({
                userName,
                email,
                fullName,
                password,
                phone,
                role,
                department,
                isBlocked: false,
                isOnline: false,
                userId: userId,
                dateCreated: new Date()
            })

            const accessToken = token.createToken(admin)

            return accessToken

        } catch (error) {
            // console.log(error);
            throw new Error(error.message)
        }
    };

    /**
     * Attemt admin login
     */
    public login = async (userName: string, password: string): Promise<string | Error> => {
        try {
            const admin = await this.admin.findOne({ userName })

            if(!admin) throw new Error("Unable to find admin with that user name")

            if(admin.isBlocked) throw new Error("You are not authorised to view this page, please contact admin")

            if(await admin.isPasswordValid(password)) return token.createToken(admin)

            throw new Error("Either pasword or user name is wrong")

        } catch (error) {
            throw new Error(error.message)
        }
    }

    /**
     * Attempt get Admin by userId
     */
    public getAdminById = async (userId: string): Promise<AdminInterface | Error> => {
        try {
            parseInt(userId)
            const admin = await this.admin.findOne({ userId });

            if(!admin) throw new Error("Unable to find data");

            return admin
        } catch (error) {
            throw new Error("Something went wrong")
        }
    }

    /**
     * Attempt get all admin
     */
    public getAllAdmins = async (): Promise<{}[] | Error> => {
        try {
            const admins = await this.admin.find()

            if(!admins) throw new Error("No data found, please add some data first");

            return admins
        } catch (error) {
            throw new Error("Something went wrong please try again")
        }
    }

    /**
     * Attempt update admin data
     */
    public updateAdmin = async (
        userName: string,
        userId: number,
        email: string,
        fullName: string,
        phone: number,
        role: string,
        department: string,
     ): Promise<boolean | Error> => {
        
        try {
            const admin = await this.admin.findOne({ userId })

            if(!admin) throw new Error("Could not find data to update");

            admin.userName = userName
            admin.email = email
            admin.phone = phone
            admin.role = role
            admin.department = department
            admin.fullName = fullName

            let saved = await admin.save()

            if(!saved) throw new Error("Could not save updates, please try again")

            return true
        } catch (error) {
            throw new Error("Something went wrong")
        }
    }

    /**
     * Attempt update admin password
     */
    public updatePassword = async (oldPassword: string, newPassword: string, userId: number): Promise<Boolean | Error> => {
        try {
            const admin = await this.admin.findOne({ userId })

            if(!admin) throw new Error("Could not find the data, please check the provided userId")

            if(!admin.isPasswordValid(oldPassword)) throw new Error("Old password provided is not valid")

            const newPass = await bcrypt.hash(newPassword, 10)

            admin.password = newPass;

            admin.save().catch(err => {
                if(err) throw new Error("Could not update password, please try again")
            })

            return true
        } catch (error) {
            throw new Error("Something went wrong, please try again")
        }
    }

    /**
     * Attempt delete admin
     */
    public removeAdmin = async (_id: string): Promise<Boolean | Error> => {
        try {
            const removed = await this.admin.findOneAndDelete({ _id })

            if(!removed) return false;

            return true
        } catch (error) {
            throw new Error("Something went wrong, please try again")
        }
    }

    /**
     * Attempt fetch data bassed on the logged in admin
     */
    public fetchDataByAdminId = async (userId: number): Promise<{} | Error> => {
        try {
            let admins = await this.admin.find();
            
            let loansData = await this.loans.find();

            let customersData = await this.customers.find()

            let admin = admins.find(admin => admin.userId === userId)

            let role = admin?.role

            let foundLoans: ILoansData = {}
            let foundAdmins: {}[] = []

            if(role === "Review") {
                let userCases = loansData.filter(loan => loan.loanStatus === "Review" && loan.reviewOfficerName === admin?.userName);

                let newCases = userCases.filter(loan => loan.isNewLoan === true && loan.loanStatus === "Review")

                let completedCases = userCases.filter(loan => loan.loanStatus === "Granted" || loan.loanStatus === "Rejected")

                 return foundLoans = { 
                    newCases: newCases,
                    completedCases: completedCases
                 }
            }

            if(role === "Review-team-lead") {
                let reviewCases = loansData.filter(loan => loan.loanStatus === "Review");
                let reviewAdmins = admins.filter(admin => admin.role === "Review")

                let unassignedCases = reviewCases.filter(loan => loan.isNewLoan === true && loan.loanStatus === "Review" && loan.reviewOfficerName === "");

                let newCases = reviewCases.filter(loan => loan.loanStatus === "Review" && loan.reviewOfficerName !== "");

                let completedCases = reviewCases.filter(loan => loan.loanStatus === "Grante" || loan.loanStatus === "Rejected");

                foundAdmins = reviewAdmins

                return foundLoans = {
                    revNewCases: newCases,
                    revCompletedCases: completedCases,
                    unassignedCases: unassignedCases
                }
            }

            if(role === "Collection") {
                let collectionCases = loansData.filter(loan => loan.collectionOfficer === admin?.userName)

                let completededCases = collectionCases.filter(loan => loan.loanStatus === "Completed");

                let unCompletedCases = collectionCases.filter(async loan => {
                    
                    if(loan.loanStatus === "Granted") {
                        let loanCase = await this.adminHandlers.unCompletedCase(loan)

                        return loanCase
                    }
                });

                return foundLoans = {
                    newCases: unCompletedCases,
                    completedCases: completededCases
                }
            }

            if(role === "Collection-team-lead") {
                let collectionCases = loansData.filter(loan => loan.loanStatus === "Granted");
                let collectionAdmins = admins.filter(admin => admin.role === "Collection")

                let sortedPreCollectionCases = await this.adminHandlers.sortPreCollectionCases(collectionCases);

                let sortedUnassignedCollectionCases = await this.adminHandlers.sortedUnassignedCollectionCases(collectionCases);

                let sortedAssignedCollectionCases = await this.adminHandlers.sortedAssignedCollectionCases(collectionCases);

                let sortedCompletedCollectionCases = await this.adminHandlers.sortedCompletedCollectionCases(collectionCases);

                foundAdmins = collectionAdmins

                return foundLoans = {
                    unassignedCases: sortedUnassignedCollectionCases,
                    assignedCases: sortedAssignedCollectionCases,
                    completedCases: sortedCompletedCollectionCases,
                    nearCollection: sortedPreCollectionCases
                }
            }

            if(role === "Admin") {

                let revnewCases = loansData.filter(loan => loan.isNewLoan === true && loan.loanStatus === "Review" && loan.reviewOfficerName === "");

                let revassignedCases = loansData.filter(loan => loan.loanStatus === "Review" && loan.reviewOfficerName !== "");

                let revcompletedCases = loansData.filter(loan => loan.loanStatus === "Granted" || loan.loanStatus === "Rejected");

                let sortedPreCollectionCases = await this.adminHandlers.sortPreCollectionCases(loansData);

                let sortedUnassignedCollectionCases = await this.adminHandlers.sortedUnassignedCollectionCases(loansData);

                let sortedAssignedCollectionCases = await this.adminHandlers.sortedAssignedCollectionCases(loansData);

                let sortedCompletedCollectionCases = await this.adminHandlers.sortedCompletedCollectionCases(loansData);

                return foundLoans = {
                    nearCollection: sortedPreCollectionCases,
                    revNewCases: revnewCases,
                    revAssignedCases: revassignedCases,
                    revCompletedCases: revcompletedCases,
                    unassignedCases: sortedUnassignedCollectionCases,
                    assignedCases: sortedAssignedCollectionCases,
                    completedCases: sortedCompletedCollectionCases
                }
            }

            return { foundLoans, foundAdmins, customersData }

        } catch (error) {
            throw new Error("Something went wrong, please try again")
        }
    }
}

export default AdminServices;
