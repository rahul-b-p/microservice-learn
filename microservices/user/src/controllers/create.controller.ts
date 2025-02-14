import { NextFunction, Request, Response } from "express";
import { UserInsertionArgs, UserInsertionReqBody } from "../types";
import { logFunctionInfo, sendCustomResponse } from "../utils";
import { FunctionStatus, Roles } from "../enums";
import { validateEmail, validateEmailUniqueness, validatePhoneNo, validatePhoneUniqueness } from "../validators";
import { BadRequestError, ConflictError } from "../errors";
import { errorMessage, responseMessage } from "../constants";
import { inserUser } from "../services";


export const createCustomer = async (req: Request<{}, any, UserInsertionReqBody>, res: Response, next: NextFunction) => {
    const functionName = createCustomer.name;
    logFunctionInfo(functionName, FunctionStatus.START);

    try {
        const { email, phone } = req.body;

        const isValidEmail = await validateEmail(email);
        if (!isValidEmail) throw new BadRequestError(errorMessage.INVALID_EMAIL);

        const isUniqueEmail = await validateEmailUniqueness(email);
        if (!isUniqueEmail) throw new ConflictError(errorMessage.EMAIL_ALREADY_EXISTS)

        const isValidPhoneNo = validatePhoneNo(phone);
        if (!isValidPhoneNo) throw new BadRequestError(errorMessage.INVALID_PHONE);

        const isUniquePhoneNo = await validatePhoneUniqueness(phone);
        if (!isUniquePhoneNo) throw new ConflictError(errorMessage.PHONE_ALREADY_EXISTS);

        const dataToInsert: UserInsertionArgs = { ...req.body, role: Roles.CUSTOMER };
        const insertedUser = await inserUser(dataToInsert);

        logFunctionInfo(functionName, FunctionStatus.SUCCESS);
        res.status(201).json(await sendCustomResponse(responseMessage.USER_CREATED, insertedUser));
    } catch (error: any) {
        logFunctionInfo(functionName, FunctionStatus.FAIL, error.message);
        next(error);
    }
}