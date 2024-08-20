import { AdminInterface } from "@/resources/admins/admin.interfaces";

declare global {
    namespace Express {
        export interface Request {
            admin: AdminInterface
        }
    }
}