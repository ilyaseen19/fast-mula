import SocketServices from "@/utils/socket/socket.services"
import  Socket from "socket.io"
import { ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData } from "@/utils/interfaces/socket.interface";

class SocketController {
    public socketSevices = new SocketServices()
    public socket;

    constructor(socket: Socket.Socket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>) {
      this.socket = socket

        this.adminIsLogged()
        this.adminSignedOut()
        this.blockAdmin()
        this.assignCase()
    }

    private adminIsLogged = async (): Promise<void> => {
        this.socket.on("adminSignIn", async ({ userId }) => {
            try {
             let savedLog = await this.socketSevices.adminIslogged(userId)

             if(!savedLog) return;

             return this.socket.broadcast.emit("adminSignedIn", userId)
            } catch (error) {
                throw new Error(error.message) 
            }
        })
    }

    private adminSignedOut = async (): Promise<void> => {
        try {
            this.socket.on("adminSignOut", async ({ userId }) => {
                
                let savedLog = await this.socketSevices.adminLogOut(userId)

                if(!savedLog) return

                return this.socket.broadcast.emit("adminSignedOut", userId)
            })
        } catch (error) {
           throw new Error(error.message)
        }
    }

    private blockAdmin = async (): Promise<void> => { 
        try {
            this.socket.on("adminStatus", async ({ userId }, callback: Function) => {
             

                const isBlocked = await this.socketSevices.blockAdmin(userId)

                if(isBlocked instanceof Error) {
                    callback({
                        success: false,
                        message: "Could not complete action"
                    })
                }; 

                if (typeof callback !== "function") {
                    return;
                  }

               callback({
                    success: isBlocked ? true : false,
                    message: isBlocked ? "Admin blocked successfully" : "Could not complete action"
                })
            })
        } catch (error) {
            throw new Error(error.message)
        }
    }

    private assignCase = async (): Promise<void> => {
       try {
        this.socket.on("assignCase", async ({type, ids, userName}, callback: Function) => {
            const isCaseAssigned = await this.socketSevices.assignCase(type, ids, userName)

            
            if(isCaseAssigned instanceof Error) {
                callback({
                    success: false,
                    message: "Could not complete action"
                })
            }; 

            if (typeof callback !== "function") {
                return;
              }

           callback({
                success: isCaseAssigned ? true : false,
                message: isCaseAssigned ? "Admin blocked successfully" : "Could not complete action"
            })            
        })
       } catch (error) {
            throw new Error(error.message)
       }
    }
}

export default SocketController