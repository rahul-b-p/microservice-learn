import { NextFunction, Request, Response } from "express";
import { FunctionStatus } from "../enums";
import { logFunctionInfo, sendCustomResponse } from "../utils";
import { ItemInsertBody } from "../types";
import { insertItem } from "../services";
import { responseMessage } from "../constants";

export const createItem = async (req: Request<{}, any, ItemInsertBody>, res: Response, next: NextFunction) => {
    const functionName = createItem.name;
    logFunctionInfo(functionName, FunctionStatus.START);

    try {
        const insertedItem = await insertItem(req.body);

        logFunctionInfo(functionName, FunctionStatus.SUCCESS);
        res.status(201).json(await sendCustomResponse(responseMessage.ITEM_CREATED, insertedItem));
    } catch (error: any) {
        logFunctionInfo(functionName, FunctionStatus.FAIL, error.message);
        next(error);
    }
}