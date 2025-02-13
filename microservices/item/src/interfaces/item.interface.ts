import { Document, Types } from "mongoose";



export interface Iitem extends Document {
    _id: Types.ObjectId;
    name: string;
    price: number;
    count: number;
    createdAt: Date;
    updatedAt: Date;
}