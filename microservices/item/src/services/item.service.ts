import { FunctionStatus } from "../enums";
import { Iitem } from "../interfaces";
import { Item } from "../models";
import { ItemInsertBody } from "../types";
import { logFunctionInfo } from "../utils";


export const insertItem = async (dataToInsert: ItemInsertBody): Promise<Iitem> => {
    const functionName = insertItem.name;
    logFunctionInfo(functionName, FunctionStatus.START);

    try {
        const newItem = new Item(dataToInsert);
        await newItem.save();

        delete (newItem as any).__v;

        logFunctionInfo(functionName, FunctionStatus.SUCCESS);
        return newItem
    } catch (error: any) {
        logFunctionInfo(functionName, FunctionStatus.FAIL, error.message);
        throw error;
    }
}