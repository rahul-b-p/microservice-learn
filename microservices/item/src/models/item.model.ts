import mongoose, { Schema } from "mongoose";
import { Iitem } from "../interfaces";



const itemSchema = new Schema<Iitem>({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        transform(doc, ret) {
            delete ret.__v;
            return ret;
        },
    },
    toObject: {
        transform(doc, ret) {
            delete ret.__v;
            return ret;
        }
    }
});


const Item = mongoose.model<Iitem>('items', itemSchema);

export default Item;