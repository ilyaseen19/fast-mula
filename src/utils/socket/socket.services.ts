import  adminModel  from '@/resources/admins/admin.model';
import logsModel from '@/resources/logs/logs.model';
import Loans from '@/resources/loans/loan.model';

class SocketServices {
    private admin = adminModel
    private logs = logsModel
    private loans = Loans

    /**
     * Attempt change admin login status(log in)
     */
    public adminIslogged = async (userId: number): Promise<boolean | Error> => {
        try {
            const admin = await this.admin.findOne({ userId })

            if(!admin) return false
            
            const newLog = await this.logs.create({
                userId: admin._id,
                logIn: new Date(),
                userType: "Admin",
                isNewLog: true
            })

            if(!newLog) return false

            admin.isOnline = true

            await admin.save()

            return true
            
        } catch (error) {
            throw new Error("Something went wrong")
        }
    }

    /**
     * Attempt change admin login status(log out)
     */
    public adminLogOut = async (userId: number): Promise<boolean | Error> => {
        try {
            let admin = await this.admin.findOne({ userId })

            if(!admin) return false

            let logData = (await this.logs.find({userId: admin._id})).find(logg => logg.isNewLog === true)

            if(!logData) return false

            logData.logOut = new Date()

            admin.isOnline = false

            await logData.save()

            await admin.save()

            return true

        } catch (error) {
            throw new Error("Something went wrong")
        }
    }

    /**
     * Attempt block admin
     */
    public blockAdmin = async (userId: number): Promise<boolean | Error> => {
        try {
            let admin = await this.admin.findOne({ userId })
            if(!admin) return false

            admin.isBlocked = !admin.isBlocked

            await admin.save()

            return true
        } catch (error) {
            throw new Error("Something went wrong")
        }
    }

    /**
     * Attempt assign case to admin / assing / reassign / unassign should be handled here
     */
    public assignCase = async (type: string, ids: [], userName: string): Promise<boolean | Error> => {
        try {
            let loansData = await this.loans.find({_id: {$in: ids} })

            if(!loansData) return false;

             loansData.forEach(async loan => {
                if(type === "review") {
                    loan.reviewOfficerName = userName

                    await loan.save()
                    return;
                }

                loan.collectionOfficer = userName
                await loan.save()
                return;
            })

            return true
        } catch (error) {
            throw new Error("Something went wrong")
        }
    }
}

export default SocketServices