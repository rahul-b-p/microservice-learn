import { Router } from "express";
import { validateReqBody } from "./middlewares";
import { createItemSchema } from "./schemas";
import { createItem } from "./controllers";



export const router = Router();

router.post('/', validateReqBody(createItemSchema), createItem);