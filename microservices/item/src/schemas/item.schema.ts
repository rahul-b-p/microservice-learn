import { z } from "zod";
import { errorMessage } from "../constants";



export const createItemSchema = z.object({
    name: z.string().min(1, errorMessage.INVALID_ITEMNAME_LENGTH),
    price: z.number().min(0, errorMessage.INVALID_PRICE),
    count: z.number().int().min(0, errorMessage.INVALID_COUNT),
});