import { FunctionStatus } from "../enums";
import { User } from "../models";
import { UserInsertionArgs } from "../types";
import { logFunctionInfo } from "../utils";


export const inserUser = async (dataToInsert: UserInsertionArgs) => {
    const functionName = inserUser.name;
    logFunctionInfo(functionName, FunctionStatus.START);

    try {
        const newUser = new User(dataToInsert);
        await newUser.save();

        delete (newUser as any).__v;

        logFunctionInfo(functionName, FunctionStatus.START);
        return newUser;
    } catch (error: any) {
        logFunctionInfo(functionName, FunctionStatus.FAIL, error.message);
        throw error;
    }
}