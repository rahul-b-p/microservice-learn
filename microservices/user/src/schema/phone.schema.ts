import { z } from "zod";
import { phoneRegex } from "../config";
import { errorMessage } from "../constants";


export const phoneSchema = z.string().refine((val) => phoneRegex.test(val), {
    message: errorMessage.INVALID_PHONE,
});