import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces";
import { Roles } from "../enums";




const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        required: true,
        enum: Object.values(Roles)
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


const User = mongoose.model('users', userSchema);

export default User;