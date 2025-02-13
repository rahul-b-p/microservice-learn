import express from 'express';
import { router } from './router';
import { morganLogger } from './config';
import { ErrorHandler } from './middlewares';
import { connectMongoDB } from './database';
import { logger } from './utils';
import { errorMessage } from './constants';

const app = express();
const port = process.env.PORT || 3000;


const initializeApp = async () => {

    try {
        await connectMongoDB();

        app.use(morganLogger);
        app.use(express.json());
        app.use('/', router);
        app.use(ErrorHandler);

        app.listen(port, () => {
            logger.info(`App Running Successfully at https://localhost:${port}`);
        })
    } catch (error) {
        logger.error(`${errorMessage.SERVER_ISSUE}: ${error}`);
        process.exit(1);
    }
}

initializeApp();

process.on('uncaughtException', (err) => {
    logger.error(`UnCaught Exeption: ${err}`);
    process.exit(1);
});

process.on('unhandledRejection', (err) => {
    logger.warn(`Unhandled Rejection: ${err}`);
    process.exit(1);
});