import { Document, Types } from "mongoose";
import { Roles } from "../enums";



export interface IUser extends Document {
    _id: Types.ObjectId;
    username: string;
    email: string;
    phone: string;
    role: Roles;
    verified: boolean;
    createdAt: Date;
    updatedAt: Date;
}