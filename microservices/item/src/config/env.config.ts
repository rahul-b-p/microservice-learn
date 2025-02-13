import { config } from "dotenv";
import { errorMessage } from "../constants";

config();



const requiredEnvVariables: string[] = [
    'MONGODB_URI',
];

// Throwing application error, to exist from process when env variables are not assigned
requiredEnvVariables.forEach((envVar) => {
    if (!process.env[envVar]) {
        const { ENV_ACKNOWLEDGE, REQUIRED_ENV_MISSING } = errorMessage;
        const envMissingError = new Error();
        envMissingError.message = ENV_ACKNOWLEDGE;
        envMissingError.stack = envVar;
        envMissingError.name = REQUIRED_ENV_MISSING
        throw envMissingError;
    }
});


// exporting all env variables
export const MONGODB_URI = process.env.MONGODB_URI as string;
