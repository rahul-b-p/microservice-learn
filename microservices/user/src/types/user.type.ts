import { Roles } from "../enums";

export type UserInsertionReqBody = {
    username: string;
    email: string;
    phone: string;
}

export type UserInsertionArgs = UserInsertionReqBody & {
    role: Roles;
}