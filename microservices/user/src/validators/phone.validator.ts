import { isValidPhoneNumber } from 'libphonenumber-js';
import { logFunctionInfo } from '../utils';
import { FunctionStatus } from '../enums';
import { User } from '../models';

export const validatePhoneNo = (phone: string): boolean => {
    logFunctionInfo(validatePhoneNo.name, FunctionStatus.START);
    return isValidPhoneNumber(phone)
}

export const validatePhoneUniqueness = async (phone: string): Promise<boolean> => {
    const functionName = validatePhoneUniqueness.name;
    logFunctionInfo(functionName, FunctionStatus.START);

    try {
        const phoneExists = await User.exists({ phone });

        logFunctionInfo(functionName, FunctionStatus.SUCCESS);
        return phoneExists === null;
    } catch (error: any) {
        logFunctionInfo(functionName, FunctionStatus.FAIL, error.message);
        throw new Error(error.message);
    }
}