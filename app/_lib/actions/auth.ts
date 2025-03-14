"use server"
import { signIn, signOut } from "@/auth";
import { z } from "zod";
import { AuthError } from "next-auth";
//authenticate
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);  
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Invalid credentials.';
      }
    }
    throw error;
  }
}

export const logOut = async () => {
  await signOut();
};

//change password state

export type ChangePasswordState = {
  success?: string | null;
  submitError?: string | null;
  errors?: {
    oldPassword?: string[];
    newPassword?: string[];
    confirmPassword?: string[];
  }
}
//change password form schema
const ChangePasswordSchema = z.object({
  oldPassword: z.string().min(8, { message: 'Old password must be at least 8 characters long' }),
  newPassword: z.string().min(8, { message: 'New password must be at least 8 characters long' }),
  confirmPassword: z.string().min(8, { message: 'Confirm password must be at least 8 characters long' }),
}).refine(data => data.newPassword === data.confirmPassword, {
  message: 'Confirm password must match new password',
  path: ['confirmPassword'], // Optional: Highlights the specific field causing the issue
});

//change password action
// export async function changePassword(prevState: ChangePasswordState, formData: FormData): Promise<ChangePasswordState> {

//   const validatedFields = ChangePasswordSchema.safeParse({
//     oldPassword: formData.get("oldPassword"),
//     newPassword: formData.get("newPassword"),
//     confirmPassword: formData.get("confirmPassword"),
//   })
//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       submitError: 'Missing Fields. Failed to Change.',
//     };
//   }

//   const body = validatedFields.data;
//   const updatedData = {
//     oldPassword: body?.oldPassword,
//     newPassword: body?.newPassword
//   }

//   try {
//     const response = await instance.post(`${authUrl}/api/v1/Password/ChangePassword`, updatedData, {

//       headers: {
//         "Access-Control-Allow-Credentials": true,
//         "Access-control-Allow-Origin": "*",
//         clientClaim: "Password-ChangePassword",
//         accessToken: accessToken,
//         idToken: idToken,
//       }
//     })
//     if (!response?.data?.IsError) {
//       return {
//         success: `${response?.data?.message ?? "Password Changed Successfully!"}`
//       }
//     } else {
//       return {
//         submitError: `Error occured while changing Password!`
//       }
//     }

//   } catch (error: any) {
//     return {
//       submitError: `${error.response.data.errors[0]?.message ?? "Error occured while changing Password!"}`
//     }
//   }

// }