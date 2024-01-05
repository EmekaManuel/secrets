import { AxiosError, AxiosResponse } from 'axios';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as z from 'zod';

export function cn(...inputs: ClassValue[]) {
 return twMerge(clsx(inputs));
}

export const FormSchema = z
 .object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z.string().min(6, 'Password must have at least 6 characters'),
  confirmPassword: z.string().min(4).optional(),
  terms: z.literal(true, {
   errorMap: () => ({
    message: 'You must accept Terms and Conditions',
   }),
  }),
 })
 .refine(
  (data) =>
   data.confirmPassword ? data.password === data.confirmPassword : true,
  {
   message: "Password doesn't match",
   path: ['confirmPassword'],
  },
 );

// Define the interface extending AxiosError
export interface MyAxiosError<T = any> extends AxiosError {
 response?: AxiosResponse<T> | undefined;
}

export interface MyAxiosSuccess<T = any> extends AxiosResponse {
 data: T;
}
