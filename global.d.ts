declare global {
    namespace NodeJS {
        interface ProcessEnv {
            MONGO_PATH: string;
            PORT: number;
        }
    }
}


export {};
