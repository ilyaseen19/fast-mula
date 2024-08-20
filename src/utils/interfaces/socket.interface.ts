export interface ServerToClientEvents {
    noArg: () => void;
    connected: (message: string) => void;
    adminSignedIn: (userId: number) => void;
    adminSignedOut: (userId: number) => void;
}

export interface ClientToServerEvents {
    hello: () => void;
    adminStatus: (data: any, callback: () => void) => void;
    assignCase: (data: any, callback: () => void) => void;
    adminSignIn: (data: any) => void;
    adminSignOut: (data: any) => void;
}

export interface InterServerEvents {
    ping: () => void;
}

export interface SocketData {
    userId: number;
    logTimeAndDate: Date;
}
