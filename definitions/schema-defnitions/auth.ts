import { phoneRegex } from "@/lib/utils";
import { z } from "zod";

//change password form schema
export const ChangePasswordSchema = z.object({
    oldPassword: z.string().min(8, { message: 'Old password must be at least 8 characters long' }),
    newPassword: z.string().min(8, { message: 'New password must be at least 8 characters long' }),
    confirmPassword: z.string().min(8, { message: 'Confirm password must be at least 8 characters long' }),
  }).refine(data => data.newPassword === data.confirmPassword, {
    message: 'Confirm password must match new password',
    path: ['confirmPassword'], // Optional: Highlights the specific field causing the issue
  });

  export const RegisterUserSchema=z.object({
    firstName:z.string().min(1,{message:"First Name is Required."}),
    lastName:z.string().min(1,{message:"Last Name is Required."}),
    email:z.string().min(1,{message:"Email is Required."}).email(),
    phoneNumber:z.string().min(9,{message:"Phone Number is Required."}).regex(phoneRegex,{message:"It should be valid phone number"}),
    address:z.string().nullable(),
    profilePicture :z
    .instanceof(File)    
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "File size must be less than 5MB",
    })
    .refine((file) => file.type.startsWith("image/"), {
      message: "Only image files are allowed",
    })
    .refine((file) => /\.(png|jpeg|jpg)$/i.test(file.name), {
      message: "Only PNG, JPEG, and JPG files are allowed",
    }).nullable()
  });