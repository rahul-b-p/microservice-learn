import { Router } from "express";
import { validateReqBody } from "./middlewares";
import { UserCreationSchema } from "./schema";
import { createCustomer } from "./controllers";


export const router = Router();

router.post('/customer', validateReqBody(UserCreationSchema), createCustomer);