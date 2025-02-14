import { Router, Request, Response } from "express";
import { validateReqBody } from "./middlewares";
import { createItemSchema } from "./schemas";
import { createItem } from "./controllers";



export const router = Router();

router.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'Item Service ok' });
});

router.post('/', validateReqBody(createItemSchema), createItem);