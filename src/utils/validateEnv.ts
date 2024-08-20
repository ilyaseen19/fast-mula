import { cleanEnv, str, port } from "envalid";

export const validateEnv = (): void => {
    cleanEnv(process.env, {
        Node_env: str({
            choices: ["development", "production"],
        }),
        MONGO_PATH: str(),
        PORT: port({ default: 8465 }),
        JWT_SECRET: str(),
    });
};
