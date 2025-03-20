"use server"
import { signIn, signOut } from "@/auth";
import { z } from "zod";
import { AuthError } from "next-auth";
import { axiosInstance } from "@/app/_services/axiosServices";
import { baseUrl } from "@/app/_services/envService";
import { tokenProvider } from "@/app/_services/tokenService";
import { RegisterUserSchema } from "@/definitions/schema-defnitions/auth";
import { UserRegisterState } from "@/definitions/type-definitions/auth";
import { redirect } from "next/navigation";


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

//Register user
export async function registerUser(
  prevState: UserRegisterState,
  formData: FormData
)
  : Promise<UserRegisterState> {
  const { accessToken } = await tokenProvider();
  const validatedFields=RegisterUserSchema.safeParse({
    firstName:formData.get("firstName"),
    lastName:formData.get("lastName"),
    email:formData.get("email"),
    phoneNumber:formData.get("phoneNumber"),
    address:formData.get("address"),
    profilePicture:formData.get("profilePicture") as File,
  
  })
if(!validatedFields.success){
  return {
    errors:validatedFields.error.flatten().fieldErrors,
    submitError:"Invalid element, please make sure all are valid"
  }
}   
  try {
    const response = await axiosInstance.post(`${baseUrl}/Users/Create`, formData, {
      headers: {       
        "Content-Type": "multipart/form-data"
      }
    })    
    return {
      success:response.data.message??"User Registred Successfully!"
    }
  }
  catch (e:any) {
    if (e?.response?.status === 401) {
      redirect("/ok/401");
}
return {
success: null,
submitError: `${e?.response?.data?.errors[0].message??"Error occured while registering user!"}`
};
  }


}



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