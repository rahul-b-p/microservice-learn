import { z } from 'zod';
import { phoneSchema } from './phone.schema';
import { errorMessage } from '../constants';

export const UserCreationSchema = z.object({
    username: z.string().min(3, errorMessage.INVALID_USERNAME_LENGTH),
    email: z.string().email(errorMessage.INVALID_EMAIL),
    phone: phoneSchema,
});