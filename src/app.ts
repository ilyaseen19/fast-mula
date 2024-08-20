import express, { Application } from "express";
import compression from "compression"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import Controller from "@/utils/interfaces/controller.interface";
import { errorMiddleware } from "./middleware/error.middleware";
import connectDB from "@/utils/config/db";
import { Server } from "socket.io";
import { createServer } from "http";
import { corsOptions } from "./utils/config/cors.options";
import SocketController from "@/utils/socket/socket.controller";
import { ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData } from "./utils/interfaces/socket.interface";


export default class App {
    public app: Application;
    public PORT: Number;
    public httpServer;

    constructor(controllers: Controller[], PORT: Number) {
        this.app = express()
        this.httpServer = createServer(this.app)
        this.PORT = PORT

        this.initialiseSocketServer()
        this.initialiseDatabaseConnection()
        this.initialiseMiddleware()
        this.initialiseControllers(controllers);
        this.initialiseErrorHandling()
    }

    public initialiseSocketServer(): void {
       const io = new Server<ClientToServerEvents,
       ServerToClientEvents,
       InterServerEvents,
       SocketData>(this.httpServer, {
        cors: corsOptions
       })

       io.on("connection", socket => {
        
            new SocketController(socket)
       })
    }

    private initialiseMiddleware(): void {
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
        this.app.use(morgan("dev"))
        this.app.use(compression())
    }

    private initialiseControllers(controllers: Controller[]): void {
        controllers.forEach((controller: Controller) => {
            this.app.use("/api", controller.router)
        });
    }

    private initialiseErrorHandling(): void {
        this.app.use(errorMiddleware)
    }

    private initialiseDatabaseConnection(): void {
        connectDB()
    }

    public listen(): void {
        this.httpServer.listen(this.PORT, () => {
            console.log(`server is listening on port: ${this.PORT}`);
        })
    }
}

